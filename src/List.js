import React, { Component } from "react";
import remark from "remark";
import reactRenderer from "remark-react";
import heading from "mdast-util-heading-range";
import utiltoc from "mdast-util-toc";
import slug from "remark-slug";
import base64 from "base-64";

import Search from "./Search";
import Notification from "./Notification";
import AccessTokenDialog from "./AccessTokenDialog";
import { fetchStats, resetStats } from "./algoliaSearch";

// Receives an URL to GitHub and returns a shorthand
// (eg: "http://github.com/madebyform/react-parts" becomes "madebyform/react-parts")
function githubUrlToRepo(url) {
  return url
    .replace(/^.*:\/?\/?/, "") // Remove protocol (eg: "http://", "github:")
    .replace(/\.git(#.+)?$/, "") // Remove .git (and optional branch) suffix
    .replace(/(\w+@)?github\.com[/:]/, ""); // Remove domain or ssh clone url
}

class Stats extends Component {
  state = {};

  componentDidMount() {
    fetchStats(this.props.fullName, stats => this.setState(stats));
  }
  render() {
    return (
      <strong>
        {this.state.watchers} stars, {this.state.forks} forks
      </strong>
    );
  }
}

const a = props => {
  if (props.href.includes("github.com")) {
    const fullName = githubUrlToRepo(props.href);

    return (
      <span id={fullName}>
        <a target="_blank" rel="noopener noreferrer" href={props.href}>
          {props.children}
        </a>
        <Stats fullName={fullName} />
      </span>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const tocHeading = "contents|toc|table[ -]of[ -]contents?";

function removeTOC() {
  return transformer;
  function transformer(tree) {
    heading(tree, tocHeading, mutate);
  }
  function mutate(start, nodes, end) {
    return [end];
  }
}

function onlyTOC() {
  this.use(slug);
  return transformer;

  function transformer(node) {
    // Make a new TOC with all headings after the existing TOC section
    let result = utiltoc(node, {
      heading: tocHeading,
      maxDepth: 6,
      tight: false,
    });

    if (result.index === null || result.index === -1 || !result.map) {
      // Since an existing TOC section was not found, use all headings
      result = utiltoc(node, {
        maxDepth: 6,
        tight: false,
      });
    }

    node.children = result.map ? [result.map] : [];
  }
}

class List extends Component {
  state = {
    text: "# Loading…",
    requestAccessToken: false,
    notification: null,
  };

  fetchData() {
    const { author, name } = this.props.match.params;
    const endpoint = `https://api.github.com/repos/${author}/${name}/readme`;
    const headers = { Accept: "application/vnd.github.v3.raw" };
    const accessToken = localStorage.getItem("access-token");

    if (accessToken) {
      headers["Authorization"] = `Basic ${base64.encode(accessToken + ":")}`;
    }

    return fetch(endpoint, { headers }).then(
      response => {
        if (response.ok) {
          response.text().then(text => this.setState({ text }));
        } else {
          localStorage.removeItem("access-token");
          this.setState({ requestAccessToken: true });
        }
      },
      error => {
        console.error(error.message);
      }
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    resetStats();
  }

  handleAccessTokenSubmit = accessToken => {
    return fetch("https://api.github.com/rate_limit", {
      headers: { Authorization: `Basic ${base64.encode(accessToken + ":")}` },
    }).then(
      response => {
        if (response.status === 200) {
          localStorage.setItem("access-token", accessToken);
          this.setState({ requestAccessToken: false, notification: "Success" });
          this.fetchData();
        } else {
          response.json().then(json =>
            this.setState({
              requestAccessToken: true,
              notification: `We were unable to use your access token: ${json.message}`,
            })
          );
        }
      },
      error => {
        console.error(error.message);
      }
    );
  };

  handleNotificationDismiss = () => {
    this.setState({ notification: null });
  };

  render() {
    const { text, requestAccessToken } = this.state;

    const notification = this.state.notification && (
      <Notification text={this.state.notification} onDismiss={this.handleNotificationDismiss} />
    );

    if (requestAccessToken) {
      return (
        <div>
          {notification}
          <AccessTokenDialog onSubmit={this.handleAccessTokenSubmit} />
        </div>
      );
    }

    const contentsTOC = remark()
      .use(onlyTOC)
      .use(reactRenderer)
      .processSync(text).contents;

    const contentsBody = remark()
      .use(removeTOC)
      .use(reactRenderer, {
        remarkReactComponents: {
          a,
        },
      })
      .processSync(text).contents;

    return (
      <div>
        {notification}

        <div style={{ background: "lime" }}>
          <Search />
        </div>
        <div style={{ background: "cyan" }}>{contentsTOC}</div>
        <div style={{ background: "salmon" }}>{contentsBody}</div>
      </div>
    );
  }
}

export default List;

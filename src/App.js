import React, { Component } from "react";

import remark from "remark";
import reactRenderer from "remark-react";
import heading from "mdast-util-heading-range";
import utiltoc from "mdast-util-toc";
import slug from "remark-slug";
import base64 from "base-64";

import Search from "./Search";
import { fetchStats } from "./algoliaSearch";

const username = process.env.REACT_APP_GITHUB_USERNAME;
const password = process.env.REACT_APP_GITHUB_PASSWORD;

// Receives an URL to GitHub and returns a shorthand
// (eg: "http://github.com/madebyform/react-parts" becomes "madebyform/react-parts")
function githubUrlToRepo(url) {
  return url
    .replace(/^.*\:\/?\/?/, "") // Remove protocol (eg: "http://", "github:")
    .replace(/\.git(#.+)?$/, "") // Remove .git (and optional branch) suffix
    .replace(/(\w+@)?github\.com[\/\:]/, ""); // Remove domain or ssh clone url
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

function removeTOC() {
  return transformer;
  function transformer(tree) {
    heading(tree, "contents", mutate);
  }
  function mutate(start, nodes, end) {
    return [end];
  }
}

function onlyTOC() {
  this.use(slug);
  return transformer;

  function transformer(node) {
    var result = utiltoc(node, {
      heading: "contents|toc|table[ -]of[ -]contents?",
      maxDepth: 6,
      tight: false,
    });

    if (result.index === null || result.index === -1 || !result.map) {
      return;
    }

    /* Replace markdown. */
    node.children = [result.map];
  }
}

class App extends Component {
  state = {
    text: "# Loading…",
  };

  componentDidMount() {
    const listName = "matteocrippa/awesome-swift";
    const endpoint = `https://api.github.com/repos/${listName}/readme`;

    return fetch(endpoint, {
      headers: {
        Accept: "application/vnd.github.v3.raw",
        Authorization: `Basic ${base64.encode(username + ":" + password)}`,
      },
    })
      .then(response => response.text())
      .then(text => this.setState({ text }))
      .catch(err => console.error(err));
  }

  render() {
    const { text } = this.state;

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
        <div style={{ background: "lime" }}>
          <Search />
        </div>
        <div style={{ background: "cyan" }}>{contentsTOC}</div>
        <div style={{ background: "salmon" }}>{contentsBody}</div>
      </div>
    );
  }
}

export default App;

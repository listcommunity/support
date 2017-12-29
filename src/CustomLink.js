import React, { Component } from "react";

import { fetchStats } from "./algoliaSearch";

// Receives an URL to GitHub and returns a shorthand
// (eg: "http://github.com/madebyform/react-parts" becomes "madebyform/react-parts")
function githubUrlToRepo(url) {
  return url
    .replace(/^.*:\/?\/?/, "") // Remove protocol (eg: "http://", "github:")
    .replace(/\.git(#.+)?$/, "") // Remove .git (and optional branch) suffix
    .replace(/\?.*$/, "") // Remove query params (used in search and trending links)
    .replace(/(\w+@)?github\.com[/:]/, "") // Remove domain or ssh clone url
    .replace(/([^/]+)\/([^/]+)\/?.*/, "$1/$2"); // Remove everything after the second slash
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

const CustomLink = props => {
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

export default CustomLink;

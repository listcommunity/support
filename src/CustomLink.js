import React, { Component } from "react";

import { fetchStats } from "./algoliaSearch";
import { SyncIcon, StarIcon, ForkIcon } from "./Icon";

// Receives an URL to GitHub and returns a shorthand
// (eg: "http://github.com/madebyform/react-parts" becomes "madebyform/react-parts")
function githubUrlToFullName(url) {
  let fullName = url
    .replace(/^.*:\/?\/?/, "") // Remove protocol (eg: "http://", "github:")
    .replace(/\.git(#.+)?$/, "") // Remove .git (and optional branch) suffix
    .replace(/\?.*$/, "") // Remove query params (used in search and trending links)
    .replace(/(\w+@)?github\.com[/:]/, "") // Remove domain or ssh clone url
    .replace(/([^/]+)\/([^/]+)\/?.*/, "$1/$2"); // Remove everything after the second slash

  return /^.+\/.+$/.test(fullName) ? fullName : null;
}

class GitHubLink extends Component {
  state = {};

  componentDidMount() {
    fetchStats(this.props.fullName, stats => this.setState(stats));
  }

  render() {
    let stats = null;

    if (Object.keys(this.state).length === 0) {
      // Stats are being loaded
      stats = <SyncIcon width="12" height="12" className="spin" />;
    } else if (this.state.watchers !== null) {
      // Stats have been loaded and didn't fail
      stats = (
        <span>
          {this.state.watchers} <StarIcon width="14" height="12" />,
          {this.state.forks} <ForkIcon width="10" height="12" />
        </span>
      );
    }

    return (
      <span id={this.props.fullName}>
        <a target="_blank" rel="noopener noreferrer" href={this.props.href}>
          {this.props.children}
        </a>
        {stats && <span className="ml-1 shadow border rounded-sm px-1">{stats}</span>}
      </span>
    );
  }
}

const CustomLink = props => {
  if (props.href.includes("github.com")) {
    const fullName = githubUrlToFullName(props.href);
    if (fullName) return <GitHubLink {...props} fullName={fullName} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export default CustomLink;

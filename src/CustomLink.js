import React, { Component, Fragment } from "react";

import { fetchStats } from "./algoliaSearch";
import { SyncIcon, StarIcon, ForkIcon } from "./Icon";
import urlJoin from "url-join";
import isAbsoluteUrl from "is-absolute-url";

import humanizedNumber from "./humanizedNumber";

const thresholds = {
  stars: 25,
  forks: 25,
};

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
      stats = <SyncIcon width="12" height="12" />;
    } else if (this.state.watchers !== null) {
      // Stats have been loaded and didn't fail
      stats = (
        <Fragment>
          <span
            className={
              this.state.watchers > thresholds.stars ? "text-orange-dark" : "text-grey-dark"
            }>
            {humanizedNumber(this.state.watchers)}{" "}
            <StarIcon width="14" height="12" className="mr-1" />
          </span>
          <span
            className={
              this.state.forks > thresholds.forks ? "text-teal-dark" : "text-grey-dark"
            }>
            {humanizedNumber(this.state.forks)} <ForkIcon width="10" height="12" />
          </span>
        </Fragment>
      );
    }

    return (
      <span className="whitespace-no-wrap">
        <a
          id={this.props.fullName}
          target="_blank"
          rel="noopener noreferrer"
          href={this.props.href}>
          {this.props.children}
        </a>
        {stats && <span className="ml-1 text-grey-dark">{stats}</span>}
      </span>
    );
  }
}

const CustomLink = props => {
  let moreProps = {};
  let href =
    isAbsoluteUrl(props.href) || props.href.startsWith("//") || props.href.startsWith("#")
      ? props.href
      : urlJoin(window.location.pathname, props.href);

  if (props.href.includes("github.com") && !props.children[0].type) {
    const fullName = githubUrlToFullName(props.href);
    if (fullName) return <GitHubLink {...props} fullName={fullName} />;
  } else if (isAbsoluteUrl(props.href) || props.href.startsWith("//")) {
    moreProps = { target: "_blank", rel: "noopener noreferrer" };
  }

  return <a {...moreProps} {...props} href={href} />;
};

export default CustomLink;

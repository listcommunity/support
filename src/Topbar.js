import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import contrast from "contrast";

import { GitHubIcon, HamburguerIcon, CloseIcon } from "./Icon";

class Topbar extends Component {
  openSidebar = () => {
    this.props.onSidebarToggle(true);
  };

  closeSidebar = () => {
    this.props.onSidebarToggle(false);
  };

  render() {
    const { sidebarOpen, background = "#fff" } = this.props;
    const { author, name } = this.props.match.params;
    const fullName = `${author}/${name}`;

    return (
      <header
        className={`select-none bg-black shadow-md ${
          contrast(background) === "light" ? "text-black" : "text-white"
        }`}
        style={{ background }}>
        <div className="max-w-xl mx-auto flex items-center h-15 pb-1 px-1 xl:px-5">
          <Link to="/" className="link-reset p-3 mr-2">
            <h1 className="text-xl font-semibold font-sans tracking-wide">List.community</h1>
          </Link>

          <div className="text-xl hidden xl:block truncate">{fullName}</div>

          <div className="flex-1" />

          <a
            key="submit"
            href={`https://github.com/${fullName}`}
            className="link-reset p-3 pt-4 hidden sm:block flex-none">
            Submit a resource
          </a>
          <a
            key="curators"
            href={`https://github.com/${fullName}/graphs/contributors`}
            className="link-reset p-3 pt-4 hidden sm:block flex-none">
            Curators
          </a>

          <a
            href={`https://github.com/${fullName}`}
            className="link-reset p-3 pt-4 leading-none flex-none">
            <GitHubIcon width="16" height="16" />
          </a>

          {sidebarOpen === false && (
            <div
              onClick={this.openSidebar}
              className="cursor-pointer lg:hidden p-3 pt-4 leading-none flex-none">
              <HamburguerIcon width="16" height="16" />
            </div>
          )}

          {sidebarOpen && (
            <div
              onClick={this.closeSidebar}
              className={`${
                sidebarOpen ? "" : "hidden"
              } cursor-pointer lg:hidden p-3 pt-4 leading-none flex-none`}>
              <CloseIcon width="16" height="16" />
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default withRouter(Topbar);

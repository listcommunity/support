import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { EmailIcon, GitHubIcon, HamburguerIcon, CloseIcon } from "./Icon";

class Topbar extends Component {
  openSidebar = () => {
    this.props.onSidebarToggle(true);
  };

  closeSidebar = () => {
    this.props.onSidebarToggle(false);
  };

  render() {
    const { sidebarOpen, inverse, background, small } = this.props;
    const { author, name } = this.props.match.params;
    const fullName = author && name ? `${author}/${name}` : null;

    return (
      <header
        className={`select-none bg-grey-darkest ${inverse ? "text-black" : "text-white"}`}
        style={background ? { background } : {}}>
        <div className={`max-w-xl mx-auto flex items-center ${small ? "h-12" : "h-15"} px-2`}>
          <Link to="/" className="link-reset p-3 pl-2 mr-2">
            <h1 className="text-xl font-bold">List.community</h1>
          </Link>

          {fullName && <div className="text-xl hidden xl:block">{fullName}</div>}

          <div className="flex-1" />

          {!fullName && (
            <a
              href={"https://github.com/listcommunity/support"}
              className="link-reset p-3 hidden sm:block">
              Submit a list
            </a>
          )}

          {fullName && [
            <a
              key="submit"
              href={`https://github.com/${fullName}`}
              className="link-reset p-3 hidden sm:block">
              Submit a resource
            </a>,
            <a
              key="curators"
              href={`https://github.com/${fullName}/graphs/contributors`}
              className="link-reset p-3 hidden sm:block">
              Curators
            </a>,
          ]}

          {!fullName && (
            <a href="mailto:hello@dmfranc.com" className="link-reset p-3 leading-none">
              <EmailIcon width="16" height="16" />
            </a>
          )}

          <a
            href={`https://github.com/${fullName || "listcommunity/support"}`}
            className="link-reset p-3 pr-2 leading-none">
            <GitHubIcon width="16" height="16" />
          </a>

          {sidebarOpen === false && (
            <div
              onClick={this.openSidebar}
              className="cursor-pointer lg:hidden p-3 pl-6 leading-none">
              <HamburguerIcon width="16" height="16" />
            </div>
          )}

          {sidebarOpen && (
            <div
              onClick={this.closeSidebar}
              className={`${
                sidebarOpen ? "" : "hidden"
              } cursor-pointer lg:hidden p-3 pl-6 leading-none`}>
              <CloseIcon width="16" height="16" />
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default withRouter(Topbar);

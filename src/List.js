import React, { Component } from "react";
import base64 from "base-64";
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-up";

import Topbar from "./Topbar";
import Notification from "./Notification";
import AccessTokenDialog from "./AccessTokenDialog";
import { resetStats } from "./algoliaSearch";
import ListContent from "./ListContent";
import ListSidebar from "./ListSidebar";
import Advertisement from "./Advertisement";
import { ArrowUpIcon } from "./Icons";
import isSnapshot from "./isSnapshot";
import lists from "./lists";

const serverAccessToken = isSnapshot ? process.env.REACT_APP_ACCESS_TOKEN : null;

class List extends Component {
  state = {
    text: null,
    requestAccessToken: false,
    notification: null,
    sidebarOpen: false,
  };

  handleSidebarToggle = sidebarOpen => {
    this.setState({ sidebarOpen });
  };

  fetchData() {
    const { author, name } = this.props.match.params;
    const endpoint = `https://api.github.com/repos/${author}/${name}/readme`;
    const headers = { Accept: "application/vnd.github.v3.html" };
    let accessToken;

    try {
      accessToken = serverAccessToken || localStorage.getItem("access-token");
    } catch (e) {
      window.Raven.captureException(e);
    }

    if (accessToken) {
      headers["Authorization"] = `Basic ${base64.encode(accessToken + ":")}`;
    }

    return fetch(endpoint, { headers }).then(
      response => {
        if (response.ok) {
          response.text().then(text => this.setState({ text }));
        } else if (response.status === 404) {
          window.location.pathname = "/404";
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

  // Scroll to the right header
  // Based on https://gist.github.com/9859e63700d19d443878
  componentDidUpdate() {
    if (!window.location.hash) {
      return;
    }

    // Don't do anything if the current target exists.
    if (document.querySelector(":target")) {
      return;
    }

    const id = "user-content-" + decodeURIComponent(window.location.hash.slice(1));
    const target = document.getElementById(id);
    if (target != null) {
      target.scrollIntoView();
      target.focus();
    }

    // Give space for the fixed header
    const scrollY = window.scrollY;
    if (scrollY) window.scroll(0, scrollY - 80);
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
          this.setState({
            requestAccessToken: false,
            notification: "Success! You can now make 5,000 requests per hour.",
          });
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
    const { text, requestAccessToken, sidebarOpen } = this.state;
    const { author, name } = this.props.match.params;
    const fullName = `${author}/${name}`;
    const config = lists[fullName] || {};

    const notification = this.state.notification && (
      <Notification text={this.state.notification} onDismiss={this.handleNotificationDismiss} />
    );

    return (
      <div className="overflow-x-hidden bg-white min-h-screen pt-15 lg:pt-0">
        <div className="lg:mr-80">
          {requestAccessToken && <AccessTokenDialog onSubmit={this.handleAccessTokenSubmit} />}

          <div className="fixed pin-x pin-t z-20 lg:mr-80">
            <Topbar
              sidebarOpen={sidebarOpen}
              onSidebarToggle={this.handleSidebarToggle}
              background={config.color}
            />
            {notification}
          </div>
          <div className="w-full lg:pt-15">
            <ListContent {...config} fullName={fullName} text={text} />
          </div>
        </div>
        <div
          className={`w-full max-w-xs bg-grey-lightest fixed pin-r pin-t pin-b mt-15 lg:mt-0 lg:flex flex-col overflow-hidden z-20 ${
            sidebarOpen ? "flex" : "hidden"
          }`}>
          <div className="flex-1 overflow-y-scroll scrolling-touch -mr-8 pr-8">
            <ListSidebar {...config} text={text} activeItem={window.location.hash} />
          </div>

          <div className="flex-none">
            <Advertisement />
          </div>
        </div>

        <ScrollToTop showUnder={160} style={{ bottom: 30, right: 350, zIndex: 20 }}>
          <div className="bg-grey-light p-2 rounded hidden lg:block">
            <ArrowUpIcon className="block" width="32" height="32" />
          </div>
        </ScrollToTop>

        <Helmet>
          <title>{config.label}</title>
          <link
            rel="icon"
            type="image/png"
            href={`${config.favicon || config.logo || "/favicon.png"}?size=32`}
          />
        </Helmet>
      </div>
    );
  }
}

export default List;

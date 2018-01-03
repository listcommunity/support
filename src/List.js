import React, { Component } from "react";
import base64 from "base-64";
import { Helmet } from "react-helmet";
import equals from "shallow-equals";

import Topbar from "./Topbar";
import Notification from "./Notification";
import AccessTokenDialog from "./AccessTokenDialog";
import { resetStats } from "./algoliaSearch";
import ListContent from "./ListContent";
import ListSidebar from "./ListSidebar";
import Advertisement from "./Advertisement";
import lists from "./lists";

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

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !equals(this.props.match.params, nextProps.match.params) || !equals(this.state, nextState)
    );
  }

  render() {
    const { text, requestAccessToken, sidebarOpen } = this.state;
    const { author, name } = this.props.match.params;
    const fullName = `${author}/${name}`;
    const config = lists[fullName] || {};

    const notification = this.state.notification && (
      <Notification text={this.state.notification} onDismiss={this.handleNotificationDismiss} />
    );

    if (requestAccessToken) {
      return (
        <div className="flex-1">
          {notification}
          <AccessTokenDialog onSubmit={this.handleAccessTokenSubmit} />
        </div>
      );
    }

    return (
      <div className="h-screen flex flex-row overflow-hidden font-sans tracking-tight bg-white">
        {notification}

        <div className="flex-1 flex flex-col">
          <div className="flex-none">
            <Topbar
              sidebarOpen={sidebarOpen}
              onSidebarToggle={this.handleSidebarToggle}
              background={config.color}
            />
          </div>
          <div className="flex-1 overflow-y-scroll w-full">
            <ListContent fullName={fullName} text={text} />
          </div>
        </div>
        <div
          className={`flex-none w-full max-w-xs bg-grey-lightest lg:flex lg:flex-col lg:relative lg:mt-0 overflow-y-scroll ${
            sidebarOpen ? "fixed pin-r mt-15 pin-t pin-b" : "hidden"
          }`}>
          <div className="flex-1 overflow-y-scroll">
            <ListSidebar text={text} />
          </div>

          <div className="flex-none">
            <Advertisement />
          </div>
        </div>

        <Helmet>
          <title>{config.label}</title>
          <link rel="icon" type="image/png" href={`${config.logo}?size=32`} />
        </Helmet>
      </div>
    );
  }
}

export default List;

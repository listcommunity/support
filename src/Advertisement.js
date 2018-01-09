import React, { Component } from "react";

import "./Advertisement.css";

const hideAds = process.env.REACT_APP_SHOW_ADS !== "true";
let initialized = false;

class Advertisement extends Component {
  componentDidMount() {
    if (hideAds || this.isMobile()) return;

    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=listcommunity"
    );
    script.setAttribute("type", "text/javascript");
    script.setAttribute("async", "async");
    script.setAttribute("id", "_carbonads_js");

    if (initialized) {
      this._node.innerHTML = script.outerHTML;
      window._carbonads.refresh();
    } else {
      initialized = true;
      this._node.innerHTML = "";
      this._node.appendChild(script);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div ref={c => (this._node = c)} className="ad border-t shadow-lg hidden lg:block p-4" />
    );
  }

  isMobile() {
    return window.matchMedia("(max-width: 991px)").matches;
  }
}

export default Advertisement;

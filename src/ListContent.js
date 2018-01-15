import React, { PureComponent, Fragment } from "react";
import "github-markdown-css";
import convert from "htmr/lib/htmr.min";

import CustomLink from "./CustomLink";
import CustomImg from "./CustomImg";
import "./ListContent.css";

class ListContent extends PureComponent {
  componentDidUpdate() {
    if (this.props.mutate) {
      try {
        this.props.mutate();
      } catch (e) {
        window.Raven.captureException(e);
      }
    }
  }

  render() {
    let content = <div>Loading…</div>;

    if (this.props.text) {
      const wrapper = convert(this.props.text, {
        a: CustomLink,
        img: CustomImg,
      });
      content = wrapper.props.children[0];
    }

    return (
      <Fragment>
        <div id="table-of-contents" />
        <div id="start-of-content" />
        <div id="contents" />

        <div id="readme" className="markdown-body p-4 xl:p-8 max-w-xl mx-auto">
          {content.props.children}
        </div>
      </Fragment>
    );
  }
}

export default ListContent;

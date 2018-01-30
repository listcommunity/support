import React, { PureComponent, Fragment } from "react";
import convert from "htmr";

import CustomLink from "./CustomLink";
import CustomImg from "./CustomImg";

class ListContent extends PureComponent {
  componentDidUpdate() {
    if (this.props.mutateContent) {
      try {
        this.props.mutateContent.call(this.node);
      } catch (e) {
        window.Raven.captureException(e);
      }
    }
  }

  render() {
    let content = <div>Loading updates…</div>;

    if (this.props.text) {
      const wrapper = convert(this.props.text, {
        map: {
          a: CustomLink,
          img: CustomImg,
        },
      });
      content = wrapper.props.children[0];
    }

    return (
      <Fragment>
        <div id="table-of-contents" />
        <div id="start-of-content" />
        <div id="contents" />

        <div
          id="readme"
          ref={node => (this.node = node)}
          className="markdown-body p-4 xl:p-8 max-w-xl mx-auto">
          {content.props.children}
        </div>
      </Fragment>
    );
  }
}

export default ListContent;

import React, { Component } from "react";
import remark from "remark";
import reactRenderer from "remark-react";
import "github-markdown-css";

import { removeTOC } from "./markdownUtils";
import CustomLink from "./CustomLink";
import "./ListContent.css";

class ListContent extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.text !== nextProps.text;
  }

  render() {
    const content = remark()
      .use(removeTOC)
      .use(reactRenderer, {
        remarkReactComponents: {
          a: CustomLink,
        },
      })
      .processSync(this.props.text).contents;

    return (
      <div className="markdown-body p-4 xl:py-8 max-w-xl mx-auto">
        <div className="font-sans leading-normal sm:text-lg">
          {content}
        </div>
      </div>
    );
  }
}

export default ListContent;

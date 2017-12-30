import React, { Component } from "react";
import remark from "remark";
import reactRenderer from "remark-react";
import "github-markdown-css";

import { removeTOC } from "./markdownUtils";
import CustomLink from "./CustomLink";
import "./ListContent.css";

class ListContent extends Component {
  state = {
    content: null,
  };

  renderMarkdown(text) {
    remark()
      .use(removeTOC)
      .use(reactRenderer, {
        remarkReactComponents: {
          a: CustomLink,
        },
      })
      .process(text, (e, res) => this.setState({ content: res.contents }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.text !== nextProps.text) {
      this.renderMarkdown(nextProps.text);
    }
  }

  componentDidMount() {
    if (this.props.text) {
      this.renderMarkdown(this.props.text);
    }
  }

  render() {
    return (
      <div className="markdown-body p-4 xl:py-8 max-w-xl mx-auto">
        <div className="font-sans leading-normal sm:text-lg">
          {this.state.content || "Loading…"}
        </div>
      </div>
    );
  }
}

export default ListContent;

import React, { Component } from "react";
import remark from "remark";
import reactRenderer from "remark-react";
import slug from "remark-slug";
import headings from "remark-autolink-headings";
import emoji from "remark-emoji";
import sanitizeGhSchema from "hast-util-sanitize/lib/github.json";
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
      .use(slug)
      .use(removeTOC)
      .use(headings)
      .use(emoji, { padSpaceAfter: true })
      .use(reactRenderer, {
        sanitize: {
          ...sanitizeGhSchema,
          // Remove user-content from github.json to remark-slug work as expected.
          // See https://github.com/remarkjs/remark-slug/issues/8
          clobberPrefix: "",
        },
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
      <div id="readme" className="markdown-body p-4 xl:py-8 max-w-xl mx-auto">
        <div id="start-of-content" className="font-sans leading-normal sm:text-lg">
          {this.state.content || "Loading…"}
        </div>
      </div>
    );
  }
}

export default ListContent;

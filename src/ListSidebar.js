import React, { Component } from "react";
import remark from "remark";
import reactRenderer from "remark-react";

import Search from "./Search";
import { onlyTOC } from "./markdownUtils";
import "./ListSidebar.css";

class ListSidebar extends Component {
  state = {
    content: null,
  };

  renderMarkdown(text) {
    remark()
      .use(onlyTOC)
      .use(reactRenderer)
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
      <div className="ListSidebar m-4">
        <Search />
        <div className="mt-4">{this.state.content || "Loading…"}</div>
      </div>
    );
  }
}

export default ListSidebar;

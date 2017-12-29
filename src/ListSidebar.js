import React, { Component } from "react";
import remark from "remark";
import reactRenderer from "remark-react";

import Search from "./Search";
import { onlyTOC } from "./markdownUtils";
import "./ListSidebar.css";

class ListSidebar extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.text !== nextProps.text;
  }

  render() {
    const toc = remark()
      .use(onlyTOC)
      .use(reactRenderer)
      .processSync(this.props.text).contents;

    return (
      <div className="ListSidebar m-4">
        <Search />
        <div className="mt-4">{toc}</div>
      </div>
    );
  }
}

export default ListSidebar;

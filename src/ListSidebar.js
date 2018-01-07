import React, { PureComponent } from "react";
import remark from "remark";
import reactRenderer from "remark-react";
import slug from "remark-slug";

import Search from "./Search";
import SearchPoweredBy from "./SearchPoweredBy";
import { onlyTOC } from "./markdownUtils";
import "./ListSidebar.css";

const TOCLink = ({ children, href, ...props }) =>
  window.location.hash === href ? (
    <strong className="cursor-pointer">{children}</strong>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  );

class ListSidebar extends PureComponent {
  state = {
    content: null,
  };

  renderMarkdown(text) {
    remark()
      .use(slug)
      .use(onlyTOC)
      .use(reactRenderer, {
        remarkReactComponents: {
          a: TOCLink,
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
      <div className="ListSidebar m-4">
        <Search />
        <div className="mt-4">{this.state.content || "Loading…"}</div>

        <SearchPoweredBy />
      </div>
    );
  }
}

export default ListSidebar;

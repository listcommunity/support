import React, { PureComponent } from "react";
import remark from "remark";
import reactRenderer from "remark-react";
import slug from "remark-slug";
import strip from "remark-strip-html";
import behead from "remark-behead";

import Search from "./Search";
import SearchPoweredBy from "./SearchPoweredBy";
import { removeTOC, onlyTOC } from "./markdownUtils";
import "./ListSidebar.css";

const TOCLink = ({ children, href, ...props }) =>
  window.location.hash === href ? (
    <a className="font-bold" href={href} {...props}>
      {children}
    </a>
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
    let mark = remark()
      .use(strip)
      .use(slug);

    if (this.props.beheadTOC) {
      mark = mark.use(behead, this.props.beheadTOC);
    }
    if (this.props.behead) {
      mark = mark.use(behead, this.props.behead);
    }

    mark
      .use(removeTOC)
      .use(onlyTOC, this.props.optionsTOC)
      .use(reactRenderer, {
        remarkReactComponents: {
          a: TOCLink,
        },
      })
      .process(text, (e, res) => {
        try {
          this.setState({ content: res.contents.props.children });
        } catch (e) {
          window.Raven.captureException(e);
          console.error(e);
          this.setState({ content: "An error has occurred." });
        }
      });
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

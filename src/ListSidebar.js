import React, { PureComponent } from "react";

import Search from "./Search";
import SearchPoweredBy from "./SearchPoweredBy";
import { isSnapshot } from "./snapshots";

class ListSidebar extends PureComponent {
  state = {
    content: [],
  };

  getAnchorNodes() {
    return document.querySelectorAll("#readme .anchor");
  }

  // Generate the table of contents based on the data fetched from GitHub
  // Based on https://github.com/Mottie/GitHub-userscripts/wiki/GitHub-table-of-contents
  generateTOC = () => {
    let i,
      anchor,
      header,
      text,
      content = [],
      anchors = this.getAnchorNodes();

    for (i in anchors) {
      anchor = anchors[i];

      if (anchor.parentNode) {
        header = anchor.parentNode;
        text = header.textContent.trim();

        content.push({
          name: header.nodeName.toLowerCase(),
          hash: anchor.hash,
          text,
        });
      }
    }

    this.setState({ content });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.text !== this.props.text) {
      this.generateTOC();
    }

    if (!isSnapshot && this.state.content.length > 0 && this.props.mutateTOC) {
      try {
        this.props.mutateTOC.call(this.node);
      } catch (e) {
        window.Raven.captureException(e);
      }
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.getAnchorNodes().length !== 0) {
        clearInterval(this.timer);
        this.generateTOC();
      }
    }, 250);
  }

  render() {
    if (isSnapshot) {
      return (
        <div className="m-4 text-grey leading-loose text-center text-sm">
          <noscript>Enable JavaScript for more features</noscript>
        </div>
      );
    }

    return (
      <div className="m-4">
        <Search />

        <div className="toc mt-4" ref={node => (this.node = node)}>
          {!this.props.text && "Loading…"}

          {this.state.content.map(item => (
            <a
              key={item.hash}
              id={`toc-${item.hash.slice(1)}`}
              className={`toc-${item.name}${
                this.props.activeItem === item.hash ? " font-semibold" : ""
              }`}
              href={item.hash}>
              {item.text}
            </a>
          ))}
        </div>

        <SearchPoweredBy />
      </div>
    );
  }
}

export default ListSidebar;

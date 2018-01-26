import React, { PureComponent } from "react";

import Search from "./Search";
import SearchPoweredBy from "./SearchPoweredBy";
import { isSnapshot } from "./snapshots";
import "./ListSidebar.css";

class ListSidebar extends PureComponent {
  state = {
    content: [],
  };

  // Generate the table of contents based on the data fetched from GitHub
  // Based on https://github.com/Mottie/GitHub-userscripts/wiki/GitHub-table-of-contents
  generateTOC = () => {
    let i,
      anchor,
      header,
      text,
      content = [],
      anchors = document.querySelectorAll("#readme .anchor");

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

    if (this.props.mutate) {
      try {
        this.props.mutate();
      } catch (e) {
        window.Raven.captureException(e);
      }
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (document.querySelectorAll("#readme .anchor").length !== 0) {
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

        <div className="toc mt-4">
          {!this.props.text && "Loading…"}

          {this.state.content.map(item => (
            <a
              key={item.hash}
              id={`toc-${item.hash.slice(1)}`}
              className={`toc-${item.name}${
                this.props.activeItem === item.hash ? " font-bold" : ""
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

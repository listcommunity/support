import React, { Component } from "react";

import SearchBox from "./SearchBox";
import { search } from "./algoliaSearch";

class Search extends Component {
  state = {
    results: [],
    lastUpdate: new Date(),
  };

  handleChange = e => {
    const query = e.target.value;
    const lastUpdate = new Date();

    if (!query) {
      this.setState({ results: [], lastUpdate });
    } else {
      search(query, (success, content) => {
        if (this.state.lastUpdate.getTime() < lastUpdate.getTime()) {
          this.setState({ results: content.hits, lastUpdate });
        }
      });
    }
  };

  render() {
    const { results } = this.state;

    return (
      <div>
        <SearchBox handleChange={this.handleChange} />
        {results.map(result => (
          <a style={{ display: "block" }} href={`#${result.full_name}`} key={result.full_name}>
            <span dangerouslySetInnerHTML={{ __html: result._highlightResult.name.value }} /> -
            <span dangerouslySetInnerHTML={{ __html: result._highlightResult.description.value }} />
          </a>
        ))}
      </div>
    );
  }
}

export default Search;

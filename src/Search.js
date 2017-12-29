import React, { Component } from "react";

import SearchBox from "./SearchBox";
import { search } from "./algoliaSearch";

class Search extends Component {
  state = {
    results: [],
    lastUpdate: new Date(),
  };

  handleChange = query => {
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
        {results.length > 0 && (
          <div className="px-3 py-2 bg-white rounded shadow mt-2">
            {results.map(result => (
              <a
                style={{ display: "block" }}
                href={`#${result.full_name}`}
                key={result.full_name}
                className="block py-1">
                <strong
                  className="mr-2"
                  dangerouslySetInnerHTML={{ __html: result._highlightResult.name.value }}
                />
                <span
                  dangerouslySetInnerHTML={{ __html: result._highlightResult.description.value }}
                />
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Search;

import React, { Component, Fragment } from "react";

import SearchBox from "./SearchBox";
import { search } from "./algoliaSearch";

class Search extends Component {
  state = {
    query: null,
    results: [],
    lastUpdate: new Date(),
    searching: false,
  };

  handleChange = query => {
    const lastUpdate = new Date();

    if (!query) {
      this.setState({ query: null, results: [], lastUpdate, searching: false });
    } else {
      this.setState({ searching: true });

      search(query, (success, content) => {
        if (this.state.lastUpdate.getTime() < lastUpdate.getTime()) {
          this.setState({ query, results: content.hits, lastUpdate, searching: false });
        }
      });
    }
  };

  render() {
    const { query, results, searching } = this.state;

    return (
      <Fragment>
        <SearchBox handleChange={this.handleChange} />

        {results.length > 0 && (
          <div className="px-3 py-2 bg-white rounded shadow mt-2 text-sm">
            {results.map(result => (
              <a
                href={`#${result.full_name}`}
                key={result.full_name}
                className="block py-1 link-reset truncate">
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
        {results.length === 0 &&
          searching && (
            <div className="px-3 py-2 bg-white rounded shadow mt-2 text-grey">Searching…</div>
          )}
        {results.length === 0 &&
          !searching &&
          query && (
            <div className="px-3 py-2 bg-white rounded shadow mt-2 text-grey">No results</div>
          )}
      </Fragment>
    );
  }
}

export default Search;

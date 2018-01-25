import React, { Component } from "react";

import { SearchIcon, ClearIcon } from "./Icons";

class SearchBox extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="relative h-8">
        <input
          className="appearance-none bg-transparent py-2 px-8 w-full bg-grey-light rounded-sm text-sm"
          placeholder="Search for GitHub repositories"
          type="search"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          onChange={(e) => this.props.handleChange(e.target.value)}
        />

        <button type="submit" className="leading-none text-grey p-2 absolute pin-l" title="Submit your search query">
          <SearchIcon width="16" height="16" />
        </button>

        <button
          className="leading-none text-grey p-2 absolute pin-r"
          onClick={() => this.props.handleChange()}
          title="Clear the search query"
          type="reset">
            <ClearIcon width="16" height="16" />
        </button>
      </div>
    );
  }
}

export default SearchBox;

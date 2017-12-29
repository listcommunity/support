import React, { Component } from "react";

import { SearchIcon, ClearIcon } from "./Icon";

class SearchBox extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <form noValidate role="search" className="flex items-center relative h-8">
        <input
          className="leading-none bg-transparent py-2 px-8 w-full absolute pin-r pin-l bg-grey-light rounded-sm"
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
      </form>
    );
  }
}

export default SearchBox;

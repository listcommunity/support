import React, { Component } from "react";

class SearchBox extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <input
        type="search"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        onChange={this.props.handleChange}
      />
    );
  }
}

export default SearchBox;

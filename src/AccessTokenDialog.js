import React, { Component } from "react";
import PropTypes from "prop-types";

class AccessTokenDialog extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = () => {
    if (this.input.value) {
      this.props.onSubmit(this.input.value);
    }
  };

  render() {
    return (
      <div>
        GitHub limits unauthenticated API requests to 60 per hour, but after binding your access
        token you will be able to enjoy the rate limit of 5,000 requests per hour. You should at
        least add permission for public_repo to enable star/unstar, and user:follow to enable
        follow/unfollow.
        <a href="https://github.com/settings/tokens/new">Create access token</a>
        <input
          ref={input => (this.input = input)}
          type="text"
          placeholder="Paste access token here"
        />
        <button onClick={this.handleSubmit}>Save</button>
      </div>
    );
  }
}

export default AccessTokenDialog;

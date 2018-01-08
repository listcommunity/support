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
      <div className="fixed pin overflow-auto z-30">
        <div className="fixed bg-black pin" style={{ opacity: 0.9 }} />

        <div className="relative mx-auto max-w-md">
          <div className="my-6 mx-2 shadow-lg p-6 bg-white rounded leading-loose text-lg">
            <p>
              GitHub limits unauthenticated API requests to 60 per hour, but after binding your
              access token you will get a limit of 5,000 requests per hour.
            </p>
            <p className="mt-2">
              <a
                href="https://github.com/settings/tokens/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue">
                Create a new access token
              </a>{" "}
              without any scopes and paste it back here:
            </p>
            <div className="flex mt-4">
              <input
                ref={input => (this.input = input)}
                type="text"
                placeholder="Paste access token here"
                className="flex-1 p-2 border mr-2 rounded-sm"
              />
              <button
                onClick={this.handleSubmit}
                className="py-2 px-4 flex-none bg-blue rounded-sm shadow bg-blue hover:bg-blue-dark text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccessTokenDialog;

import React from "react";
import PropTypes from "prop-types";

const Notification = ({ text, onDismiss }) => (
  <h1 style={{ background: "violet" }} onClick={onDismiss}>
    {text}
  </h1>
);

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Notification;

import React from "react";
import PropTypes from "prop-types";

const Notification = ({ text, onDismiss }) => (
  <h2
    onClick={onDismiss}
    className="cursor-pointer bg-black p-4 text-lg text-center font-normal text-white">
    {text}
  </h2>
);

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Notification;

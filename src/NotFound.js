import React from "react";

const NotFound = () => (
  <a href="/" className="fixed link-reset block bg-grey-darkest pin overflow-auto">
    <div
      className="relative select-none text-center"
      style={{ top: "50%", transform: "translateY(-50%)" }}>
      <strong className="block text-2xl text-grey-light">404</strong>
      <span className="text-grey-dark text-xl">Page not found</span>
    </div>
  </a>
);

export default NotFound;

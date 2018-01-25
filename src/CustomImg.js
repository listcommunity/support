import React from "react";
import urlJoin from "url-join";
import isAbsoluteUrl from "is-absolute-url";

const CustomImg = ({ children, ...props }) => {
  let moreProps = {};
  let src =
    isAbsoluteUrl(props.src) || props.src.startsWith("//") || props.src.startsWith("#")
      ? props.src
      : urlJoin("https://github.com", window.location.pathname, "/raw/master/", props.src, "?sanitize=true");

  if (isAbsoluteUrl(src) || src.startsWith("//")) {
    moreProps = { target: "_blank", rel: "noopener noreferrer" };
  }

  return (
    <img alt="" {...moreProps} {...props} src={src}>
      {children}
    </img>
  );
};

export default CustomImg;

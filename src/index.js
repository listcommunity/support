import "core-js/fn/string/includes";
import "core-js/fn/string/starts-with";
import "core-js/fn/object/entries";

import React from "react";
import { hydrate, render } from "react-dom";

import App from "./App";
import "./index.css";

if (process.env.REACT_APP_USE_SENTRY === "true") {
  window.Raven.config("https://94f7c71ab8c7481386de0a3a60a7877d@sentry.io/269763").install();
}

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

import ReactDOM from "react-dom";

const cloneElement = document.createElement("div");
let rootElement = document.getElementById("root");

export const isSnapshot = navigator.userAgent === "ReactSnap";

export const render = (component) => {
  if (!isSnapshot && rootElement.hasChildNodes()) {
    ReactDOM.render(component, cloneElement);
  } else {
    ReactDOM.render(component, rootElement);
  }
};

export const replaceRoot = () => {
  if (rootElement && cloneElement.hasChildNodes()) {
    document.body.removeChild(rootElement);
    document.body.appendChild(cloneElement);
    rootElement = null;
  }
};

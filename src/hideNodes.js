export default (selector, opts = {}) => {
  let el = document.querySelector(selector);
  if (opts.parent && el != null) el = el.parentNode;
  if (el != null) el.style.display = "none";
};

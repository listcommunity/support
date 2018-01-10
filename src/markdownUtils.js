import heading from "mdast-util-heading-range";
import utiltoc from "mdast-util-toc";

const tocHeading = "contents|toc|table[ -]of[ -]contents?";

export const removeTOC = function() {
  return transformer;

  function transformer(tree) {
    heading(tree, tocHeading, mutate);
  }

  function mutate(start, nodes, end) {
    return [end];
  }
};

export const onlyTOC = function(options = {}) {
  return transformer;

  function transformer(node) {
    const result = utiltoc(node, {
      maxDepth: 4,
      tight: false,
      ...options,
    });

    node.children = result.map ? [result.map] : [];
  }
};

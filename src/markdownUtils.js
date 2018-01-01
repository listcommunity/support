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

export const onlyTOC = function() {
  return transformer;

  function transformer(node) {
    // Make a new TOC with all headings after the existing TOC section
    let result = utiltoc(node, {
      heading: tocHeading,
      maxDepth: 6,
      tight: false,
    });

    if (result.index === null || result.index === -1 || !result.map) {
      // Since an existing TOC section was not found, use all headings
      result = utiltoc(node, {
        maxDepth: 6,
        tight: false,
      });
    }

    node.children = result.map ? [result.map] : [];
  }
};

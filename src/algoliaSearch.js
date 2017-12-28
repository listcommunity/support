import AlgoliaSearch from "algoliasearch";
import debounce from "lodash.debounce";
import chunk from "lodash.chunk";

const password = process.env.REACT_APP_GITHUB_PASSWORD;

const algolia = new AlgoliaSearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY
);

const index = algolia.initIndex("repositories");
const data = {};

const searchStats = function(batchSize = 1000) {
  const batches = chunk(Object.keys(data), batchSize);

  batches.forEach(batch => {
    const filters = batch.map(f => `objectID:${f}`).join(" OR ");

    index.search({ filters, hitsPerPage: batchSize }, (success, content) => {
      content.hits.forEach(hit => {
        data[hit.objectID].forEach(callback => callback(hit));
      });
    });
  });
};

const debouncedSearchStats = debounce(searchStats, 1000);

export const fetchStats = function(fullName, callback) {
  if (data[fullName] == null) data[fullName] = [];
  data[fullName].push(callback);

  debouncedSearchStats();
};

export const search = debounce(function(query, callback) {
  const filters = Object.keys(data)
    .map(f => `objectID:${f}`)
    .join(" OR ");

  index.search(
    { query, filters, hitsPerPage: 40, highlightPreTag: "<mark>", highlightPostTag: "</mark>" },
    callback
  );
}, 500);

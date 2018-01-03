import AlgoliaSearch from "algoliasearch";
import debounce from "lodash.debounce";
import chunk from "lodash.chunk";
import difference from "lodash.difference";

const algolia = new AlgoliaSearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY
);

const index = algolia.initIndex("repositories");
let data = {};

const searchStats = function(batchSize = 1000) {
  const ids = Object.keys(data);
  const batches = chunk(ids, batchSize);

  batches.forEach(batch => {
    const filters = batch.map(f => `objectID:${f}`).join(" OR ");

    index.search({ filters, hitsPerPage: batchSize }, (success, content) => {
      content.hits.forEach(hit => {
        const callbacks = data[hit.objectID] || [];
        setTimeout(() => callbacks.forEach(callback => callback(hit)), 100);
      });

      difference(batch, content.hits.map(hit => hit.objectID)).forEach(objectID => {
        const callbacks = data[objectID] || [];
        callbacks.forEach(callback => callback({ watchers: null, forks: null }));
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

export const resetStats = function() {
  data = {};
};

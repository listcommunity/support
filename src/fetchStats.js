import AlgoliaSearch from "algoliasearch";
import debounce from "lodash.debounce";
import chunk from "lodash.chunk";

const password = process.env.REACT_APP_GITHUB_PASSWORD;

const algolia = new AlgoliaSearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY
);

const index = algolia.initIndex("repositories");
const queries = {};

const search = function(chunkSize = 1000) {
  const chunks = chunk(Object.keys(queries), chunkSize);

  chunks.forEach(chunk => {
    const filters = chunk.map(f => `objectID:${f}`).join(" OR ");

    index.search({ filters, hitsPerPage: chunkSize }, (success, content) => {
      content.hits.forEach(hit => {
        queries[hit.objectID].forEach(callback => callback(hit));
      });
    });
  });
};

var debouncedSearch = debounce(search, 1000);

function fetchStats(fullName, callback) {
  if (queries[fullName] == null) queries[fullName] = [];
  queries[fullName].push(callback);

  debouncedSearch();
}

export default fetchStats;

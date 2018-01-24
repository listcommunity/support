import React from "react";

// You can find alternative Algolia logos in their website: https://algolia.com/press#resources
import { AlgoliaLogo } from "./Images";

const SearchPoweredBy = () => (
  <div className="flex items-center mt-8">
    <span className="text-sm">Search by</span>
    <a
      href="https://www.algolia.com/?utm_medium=website&utm_content=list.community&utm_campaign=poweredby"
      target="_blank"
      rel="noopener noreferrer">
      <AlgoliaLogo className="block h-4" style={{ marginTop: 2, marginLeft: 4 }} />
    </a>
  </div>
);

export default SearchPoweredBy;

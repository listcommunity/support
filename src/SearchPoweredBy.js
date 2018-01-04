import React from "react";

// You can find alternative Algolia logos in their website: https://algolia.com/press#resources
import logo from "./algolia-logo.svg";

const SearchPoweredBy = () => (
  <div className="flex items-center mt-8">
    <span className="text-sm">Search by</span>
    <a
      href="https://www.algolia.com/?utm_medium=website&utm_content=list.community&utm_campaign=poweredby"
      target="_blank"
      rel="noopener noreferrer">
      <img src={logo} alt="Algolia" className="block pl-1 h-4" draggable="false" />
    </a>
  </div>
);

export default SearchPoweredBy;

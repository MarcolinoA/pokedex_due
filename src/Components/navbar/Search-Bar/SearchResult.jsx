import React from "react";
import "./SearchBar.css";

export default function SearchResult({ results }) {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`you clicked on ${results.name}`)}
    >
      {results.name}
    </div>
  );
}
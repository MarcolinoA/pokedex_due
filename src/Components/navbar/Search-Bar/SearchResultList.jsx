import React from 'react';
import "./SearchBar.css";
import SearchResult from './SearchResult';

function SearchResultsList({results}) {
  return ( 
    <div className="results-list">
      {results.map((results, id) => {
        return <SearchResult results={results} key={id} />
      })}
    </div>
   );
}

export default SearchResultsList;
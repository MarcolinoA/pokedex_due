import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "../Icon/SearchIcon";

const SearchBar = () => {
  const [input, setInput] = useState("");

  //

  const handleChange = (value) => {
    setInput(value);
    //
  };

  return (
    <div className="input-wrapper">
      <SearchIcon />
      <input
        className="input"
        placeholder="type"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

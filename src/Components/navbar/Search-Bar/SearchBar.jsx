import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "../Icon/SearchIcon";

const SearchBar = () => {
  const [input, setInput] = useState("");

  //

  const handleChange = (value) => {
    setInput(value);
    console.log(input);
  };

  return (
    <div className="input-wrapper">
      <SearchIcon />
      <input
        type="text"
        className="input"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

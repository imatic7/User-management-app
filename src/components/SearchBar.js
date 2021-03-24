import React from "react";

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
  const BarStyling = {
    width: "10rem",
    background: "#F2F1F9",
    border: "3px solid #409cf7",
    padding: "0.5rem",
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Search Users List"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;

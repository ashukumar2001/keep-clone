import React from "react";

const SearchBar = ({ MdSearch }) => {
  return (
    <div className="searchbar">
      <button className="search-btn btn">
        <MdSearch />
      </button>
      <form className="searchbar-form">
        <input type="text" className="searchbar-input" placeholder="Search" />
      </form>
    </div>
  );
};

export default SearchBar;

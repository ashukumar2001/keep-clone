import React from "react";
import {
  MdSearch,
  MdRefresh,
  MdBrightness4,
  MdBrightness5,
} from "react-icons/md";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <a href="index.html" className="brand">
          <img src="./images/keep.png" alt="logo" className="brand-logo" />
          <span className="brand-title">Keep</span>
        </a>
        <div className="searchbar">
          <button className="search-btn btn">
            <MdSearch />
          </button>
          <form className="searchbar-form">
            <input
              type="text"
              className="searchbar-input"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="control-btn-container">
          <button className="refresh-btn btn">
            <MdRefresh />
          </button>
          <button className="toggle-theme btn">
            <MdBrightness4 />
          </button>
        </div>
        <div className="user">
          <a href="#" className="user-profile">
            <div className="user-image"></div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

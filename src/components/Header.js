import React, { useEffect, useState } from "react";
import {
  MdSearch,
  MdRefresh,
  MdBrightness4,
  MdBrightness5,
} from "react-icons/md";

const darkTheme = {
  backgroundColor: "#202124",
  color: "#e8eaed",
};
const lightTheme = {
  backgroundColor: "#e8eaed00",
  color: "#202124b1",
};

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = isDarkMode
      ? darkTheme.backgroundColor
      : lightTheme.backgroundColor;
    document.querySelector("a").style.color = isDarkMode
      ? darkTheme.color
      : lightTheme.color;

    document.querySelectorAll("button").forEach((button) => {
      button.style.color = isDarkMode ? darkTheme.color : lightTheme.color;
    });
  }, [isDarkMode]);

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
          <button
            className="toggle-theme btn"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
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

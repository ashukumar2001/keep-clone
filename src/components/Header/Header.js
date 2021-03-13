import React from "react";
import { MdSearch, MdRefresh, MdBrightness4 } from "react-icons/md";
import Brand from "./Brand";
import SearchBar from "./SearchBar";
import Controls from "./Controls";
import User from "./User";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <Brand />
        <SearchBar MdSearch={MdSearch} />
        <Controls icons={{ MdRefresh, MdBrightness4 }} />
        <User />
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { GrSearch } from "react-icons/gr";
import './Header.css'

function Header() {
  return (
    <div className="header__container">
        <div className="header__title">
      <h1>Search Properties for Rent</h1>
      <div className="header__search">
        <input className="header__searchInput" type="text">
         </input>
        <GrSearch className="header__searchIcon" />
      </div>
     </div>
     <div>
        filters
        </div>
      
    </div>
  );
}

export default Header;

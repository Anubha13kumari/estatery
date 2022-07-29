import React from "react";
import "./Header.css";
import { Button } from "@mui/material";

function Header() {
  return (
    <div className="header__container">
      <div className="header__title">
        <h1>Search Properties for Rent</h1>
        <div className="header__search"></div>
      </div>
      <div className="header__filtercontainer">
        <Button
          style={{
            backgroundColor: "#8c52ff",
            color: "white",
            width: "8vw",
            height: "7vh",
            marginRight: "1rem",
            marginTop: "0.75rem",
          }}
          variant="contained"
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default Header;

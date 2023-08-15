import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/menus">Menu</Link>
          <Link to="/contact">Contact</Link>
        </div>
    </>
  );
};

export default NavBar;

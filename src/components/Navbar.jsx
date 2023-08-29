import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/menus">Menu</Link>
      <Link to="/contact">Contact</Link>

      {/* Sign-In Button */}
      <Link to="/signin" className="nav-link">
        <FontAwesomeIcon icon={faSignInAlt} />
        Sign In
      </Link>

      {/* Cart Icon */}
      <Link to="/cart" className="nav-link">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
    </div>
  );
};

export default NavBar;

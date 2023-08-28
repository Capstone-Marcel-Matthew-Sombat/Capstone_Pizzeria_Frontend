import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/menus">Menu</Link>
        <Link to="/contact">Contact</Link>
        </div>

        <div id="signin-n-cart">
        {/* Sign-In Button */}
        <Link to="/signin" className="sign-in-btn">
          Sign In
        </Link>

        {/* Cart Icon */}
        <Link to="/cart" className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </>
  );
};

export default NavBar;

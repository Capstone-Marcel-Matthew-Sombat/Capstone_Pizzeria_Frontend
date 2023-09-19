import React from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  const login = Cookies.get("Customerlogin");

  return (
    <>
      <div className="header-wrapper">
        <div id="navbar">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link
            to="/all-menus"
            className={location.pathname === "/all-menus" ? "active" : ""}
          >
            Menus
          </Link>

          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
          {login ? (
            <>
              <Link
                to="/logout-customer"
                className={
                  location.pathname === "/logout-customer" ? "active" : ""
                }
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/register-customer"
                className={
                  location.pathname === "/register-customer" ? "active" : ""
                }
              >
                Sign Up
              </Link>
              <Link
                to="/login-customer"
                className={
                  location.pathname === "/login-customer" ? "active" : ""
                }
              >
                Login
              </Link>
            </>
          )}
          <Link
            to="/cart"
            className={location.pathname === "/cart" ? "active" : ""}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="social-icons footer-icons">
        <div>
          <h3>Connect with Us</h3>
        </div>
        <div>
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F" />
          </a>
          <a href="https://www.yelp.com/" target="_blank">
            <FontAwesomeIcon icon={faYelp} size="2x" color="#000000" />
          </a>
        </div>
      </div>

      <div className="footer">
        &copy; Capstone Project by Capstone Pizzeria Group. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;

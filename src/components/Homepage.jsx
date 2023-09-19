import React from "react";
import GoogleMapEmbed from "../assets/Googlemap";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div id="cover-video">
        <video width="100%" autoPlay muted loop>
          <source
            src="src/assets/cover-video-capstonepizzeria.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* <div id="welcome-text">Welcome to Capstone Pizzeria</div> */}

      <div className="home-menu"></div>

      {/* embeded google map */}
      <div>
        <GoogleMapEmbed />
      </div>
    </div>
  );
};

export default Home;

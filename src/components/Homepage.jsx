import React from "react";
import MenuList from "./MenuPage";

const Home = () => {
  return (
    <div className="home">
      <div id="cover-image">
        <img src='src/components/photos/pizza-cover.jpg' alt='cover' width="100%"/>
      </div>
      <div home-menu>
        <MenuList />
      </div>
    </div>
  );
};

export default Home;

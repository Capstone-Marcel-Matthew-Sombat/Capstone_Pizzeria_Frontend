import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Homepage";
import MenuList from "./MenuPage";
import ContactPage from "./ContactUs";

const PageContent = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menus" element= {<MenuList />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
};

export default PageContent;

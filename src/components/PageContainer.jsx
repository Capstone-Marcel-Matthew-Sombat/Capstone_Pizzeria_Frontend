import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Homepage";
import ContactPage from "./ContactUs";
import LoginCustomer from "./LoginCustomer";
import LogoutCustomer from "./LogoutCustomer";
import RegisterCustomer from "./RegisterCustomer";
import Cart from "./Cart";
import AllMenus from "./AllMenus";

const PagesContener = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login-customer" element={<LoginCustomer />} />
          <Route path="/logout-customer" element={<LogoutCustomer />} />
          <Route path="/register-customer" element={<RegisterCustomer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/all-menus" element={<AllMenus />} />
        </Routes>
      </div>
    </>
  );
};

export default PagesContener;

import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import Home from "./Homepage";
import ContactPage from "./ContactUs";
import LoginCustomer from "./LoginCustomer";
import LogoutCustomer from "./LogoutCustomer";
import RegisterCustomer from "./RegisterCustomer";
import CartItems from "./CartItems";
import AllMenus from "./AllMenus";

//context
import CartContextProvider from "./context/CartContext";

const PagesContainer = () => {
  return (
    <>
      <div>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login-customer" element={<LoginCustomer />} />
            <Route path="/logout-customer" element={<LogoutCustomer />} />
            <Route path="/register-customer" element={<RegisterCustomer />} />
            <Route path="/cart" element={<CartItems />} />
            <Route path="/all-menus" element={<AllMenus />} />
          </Routes>
        </CartContextProvider>
      </div>
    </>
  );
};

export default PagesContainer;

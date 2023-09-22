import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Homepage";
import ContactPage from "./ContactUs";
import LoginCustomer from "./LoginCustomer";
import LogoutCustomer from "./LogoutCustomer";
import RegisterCustomer from "./RegisterCustomer";
import Cart from "./Cart";
import AllMenus from "./AllMenus";

const PageContainer = () =>  {
  const [cart, setCart] = useState([]);

  const addToCart = (menu) => {
   setCart((prevCart) => [...prevCart, menu]);
   
  };
   
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login-customer" element={<LoginCustomer />} />
          <Route path="/logout-customer" element={<LogoutCustomer />} />
          <Route path="/register-customer" element={<RegisterCustomer />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route
            path="/all-menus"
            element={<AllMenus addToCart={addToCart} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default PageContainer;

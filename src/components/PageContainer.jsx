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
 
   
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart"))||[]);

  const addToCart = (menu) => {
    const existingItem = cart.find((item) => {item.item_id === menu.item_id});
    if (existingItem) {
      console.log("exist", cart, menu)
      const newCart = cart.map((item) =>
        item.item_id === menu.item_id ? { ...menu, count: item.count + 1 } : item
      );
      setCart(newCart);
    } else {
      console.log("doesn't exist")
      setCart([...cart, { ...menu, count: 1 }]);
    }
  };
  console.log(cart)

  const updateCount = (menuId, newCount) => {
    const updatedCart = cart.map((item) =>
      item.item_id === menu.item_id ? { ...item, count: newCount } : item
    );
    setCart(updatedCart);
  };

const removeFromCart = (menu) => {
  const existingItem = cart.find((item) => item.item_id === menu.item_id);
if (existingItem.count === 1){
  setCart(cart.filter((item) => item.item_id !== menu.item_id)) 
}else{
setCart.map((item) = item.item_id === menu.item_id ? {...existingItem, count: existingItem.count - 1} : item)
}
}
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login-customer" element={<LoginCustomer />} />
          <Route path="/logout-customer" element={<LogoutCustomer />} />
          <Route path="/register-customer" element={<RegisterCustomer />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
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

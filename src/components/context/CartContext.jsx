import React, { createContext, useState } from "react";

//create context
export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (menu) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.item_id === menu.item_id);

      if (existingItem) {
        return prev.map((item) =>
          item.item_id === menu.item_id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        return [...prev, { ...menu, count: 1 }];
      }
    });
  };

  const decreaseFromCart = (menu) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.item_id === menu.item_id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  //delete from cart
  const deleteFromCart = (menu) => {
    setCartItems((prev) =>
      prev.filter((item) => item.item_id !== menu.item_id)
    );
  };

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    decreaseFromCart,
    deleteFromCart,
    isOpen,
    setIsOpen,
  };

  console.log(cartItems);

  return (
    <div>
      <CartContext.Provider value={contextValue}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;

import { useState, useEffect } from "react";

const CountItem = ({ count, menu, cart, setCart }) => {
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || cart);
  }, []);
  console.log(menu, cart);

  const addToCart = () => {
    console.log(menu, cart, "hey");
    const existingItem = cart.find((item) => item.item_id === menu.item_id);
    if (existingItem) {
      const newCart = cart.map((item) =>
        item.item_id === menu.item_id ? { ...menu, count: item.count + 1 } : item
      );
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      setCart([...cart, { ...menu, count: 1 }]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...menu, count: 1 }])
      );
    }
  };

  const updateCount = (menuId, newCount) => {
    const updatedCart = cart.map((item) =>
      item.item_id === menu.item_id ? { ...item, count: newCount } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = () => {
    const existingItem = cart.find((item) => item.item_id === menu.item_id);
    if (existingItem === 1) {
      setCart(cart.filter((item) => item.item_id !== menu.item_id));
    } else {
      const newCart = cart.map((item) =>
        item.item_id === menu.item_id ? { ...menu, count: item.count - 1 } : item
      );
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  //   console.log(count);
  return (
    <div>
      <div className="cart-items-name">
        {menu.name}({menu.count})
      </div>
      <div className="cart-items-price">{menu.price}</div>

      <div className="cart-items-function">
        <button onClick={() => addToCart(count)} className="cart-items-add">
          +
        </button>
        <button
          onClick={() => removeFromCart(count)}
          className="cart-items-remove"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CountItem;

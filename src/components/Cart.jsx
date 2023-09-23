import React from "react";
import CountItem from "./CountItem";

const Cart = ({ cart, setCart }) => {
  const calculateTotal = () => {
    return cart.reduce((acc, currentItem) => {
      return acc + currentItem.price * currentItem.count;
    }, 0);
    console.log(calculateTotal);
  };
  console.log(cart);

  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>

      {cart.length === 0 && (
        <div className="cart-items-empty"> No items are added.</div>
      )}


      <div>
        {cart?.map((menu) => {
          return <CountItem key={menu.id} menu={menu} count={1} cart={cart} setCart={setCart}/>;
        })}
      </div>
      {cart.length > 0 && (
        <div className="cart-total">
          Total Price: ${calculateTotal().toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default Cart;

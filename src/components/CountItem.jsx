import React from "react";

const CountItem = ({ menu, count }) => {
  console.log(count);

  return (
    <div>
      <div className="cart-items-name">{menu.name}</div>
      <div className="cart-items-price">{menu.price}</div>

      <div className="cart-items-function">
        <button onClick={count} className="cart-items-add">
          +
        </button>
        <button className="cart-items-remove">-</button>
      </div>
    </div>
  );
};

export default CountItem;

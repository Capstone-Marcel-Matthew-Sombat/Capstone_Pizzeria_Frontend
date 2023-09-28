import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./context/CartContext";

//image success
import successImage from "../assets/success-1.gif";

const CheckoutDetails = ({ setModal }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [successMsg, setSuccessMsg] = useState(false);
  const [count, setCount] = useState(5);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  //counter
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);

      //clear timer
      return () => clearTimeout(timer);
    }
  });

  //close modal after 5 sec
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(false);

        //clear cart
        setCartItems([]);

        //close modal
        setModal(false);
      }, 5000);
      //clear timer
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  return (
    <>
      {successMsg ? (
        <div>
          <h5>thank you! the order has been placed!</h5>
          <img
            className="success-checkout"
            src={successImage}
            alt="Order Success"
          />
          <div>
            This window will Close in <span>{count}</span> seconds
          </div>
        </div>
      ) : (
        <div className="cart-checkout-details">
          <h5>Order Summary</h5>
          {cartItems.map((item) => (
            <div key={item.item_id} className="checkout-item">
              <p>
                {item.name} : ${item.price} x {item.count}
              </p>
            </div>
          ))}
          <p className="checkout-total">Total: ${total.toFixed(2)}</p>
          <button
            onClick={() => setSuccessMsg(true)}
            className="btn btn-warning"
          >
            Place Order
          </button>
        </div>
      )}
    </>
  );
};

export default CheckoutDetails;

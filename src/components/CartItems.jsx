import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

//context
import { CartContext } from "./context/CartContext";

//component
import CheckoutDetails from "./CheckoutDetails";

//icons
import { BiPlus, BiMinus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

const CartItems = () => {
  const { cartItems, addToCart, decreaseFromCart, deleteFromCart } =
    useContext(CartContext);

  // const { setIsOpen } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  //bind modal to body
  Modal.setAppElement("body");

  //modal state
  const [modal, setModal] = useState(false);

  //open modal
  const openModal = () => {
    setModal(true);
  };

  //close modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="cartItemsContainer">
      {cartItems.length === 0 ? (
        <div>
          <p className="emptyCart">Your cart is Empty.</p>
          <p className="emptyCart">
            Add to Cart? <Link to="/all-menus">Menus</Link>
          </p>
        </div>
      ) : (
        <>
          <h5>Your Shopping Cart</h5>
          {cartItems.map((item) => (
            <div key={item.item_id} className="cartItem">
              <div className="itemHeader">
                <h5>{item.name}</h5>

                {/* delete item from cart */}
                <div
                  className="deleteItem"
                  onClick={() => deleteFromCart(item)}
                >
                  <IoCloseOutline />
                </div>
              </div>

              <div className="itemDetails">
                <p>Price: ${item.price}</p>
                <p>${parseFloat(item.price * item.count).toFixed(2)}</p>
              </div>

              {/* Increase & Decrease Item */}
              <div className="amountControls">
                <div onClick={() => decreaseFromCart(item)}>
                  <BiMinus />
                </div>

                <div className="count">
                  <p>{item.count}</p>
                </div>

                <div onClick={() => addToCart(item)}>
                  <BiPlus />
                </div>
              </div>
            </div>
          ))}
          <p className="cart-total">Total: ${parseFloat(total).toFixed(2)}</p>

          <button
            onClick={() => {
              // setIsOpen(false);
              openModal();
            }}
            className="btn-checkout btn btn-primary"
          >
            Checkout
          </button>

          {modal && (
            <Modal
              className="modal-details"
              isOpen={modal}
              onRequestClose={closeModal}
              contentLabel="Checkout Modal"
            >
              {/* close modal icon */}
              <div onClick={closeModal} className="close-icon">
                <IoCloseOutline className="close-icon-size" />
              </div>
              <div className="center-summary">
                <CheckoutDetails setModal={setModal} />
              </div>
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default CartItems;

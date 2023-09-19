import React, { useState } from 'react';

const Cart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (menu) => {
        setCart(prevCart => [...prevCart, menu]);
    };

    return (
        <div>
            <h1>this is cart</h1>
            {/* items in your cart */}
        </div>
    );
};

export default Cart;

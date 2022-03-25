import React from 'react';

const Cart = ({cart}) => {
    // console.log(cart);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected item: {cart.length}</p>
        </div>
    );
};

export default Cart;
// This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = (total + shipping + tax);
    // const updateTax = updateTax + tax;
    // console.log(cart);
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected item: {cart.length}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping: $ {shipping}</p>
            <p>Tax: $ {tax}</p>
            <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
            {props.children}
            {/* decimal er por koi ghor dekhabo setar jnne tofixed krte hoi */}
        </div>
    );
};

export default Cart;
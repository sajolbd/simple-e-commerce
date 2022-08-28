import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;

    // calculate total price
    let total = 0;
    for (const sajol of cart){
        total = total + sajol.price;
    }

    // calculate total shipping charge
    let charge = 0;
    for (const sajol of cart) {
        charge = charge + sajol.shipping
    }

    // calculate grand Total
    const grand_total = charge + total;
    return (
      <div className="container-cart">
        <h4>Order Summery</h4>
        <p>Sectected Items : {cart.length}</p>
        <p>Total Price : ${total}</p>  
        <p>Total Shipping Charge : ${charge}</p>
        <p>Grand Total : ${grand_total}</p>

        <button className="cart-btn-clear">Clear Cart</button>
        <button className="cart-btn-review">Review Order</button>
      </div>
    );
};

export default Cart;
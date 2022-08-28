import React from 'react';
import './Cart.css'
const Cart = (props) => {
    
    return (
      <div className="container-cart">
        <h4>Order Summery</h4>
            <p>Sectected Items : { props.cart.length}</p>
        <p>Total Price : </p>
        <p>Total Shipping Charge : $</p>
        <p>Grand Total : $</p>

        <button className="cart-btn-clear">Clear Cart</button>
        <button className="cart-btn-review">Review Order</button>
      </div>
    );
};

export default Cart;
import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    return (
        <div className = "cart-item">
            <img src={props.img} alt="" />
            <h4>{props.name}</h4>
            <button className="cross-btn">X</button>
        </div>
    );
};

export default CartItem;
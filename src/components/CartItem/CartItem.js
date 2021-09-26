import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    const {img, name, key} = props.dev;
    return (
        <div className = "cart-item">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <button onClick = {() => props.remove(key)} className="cross-btn">X</button>
        </div>
    );
};

export default CartItem;
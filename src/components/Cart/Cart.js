import React from 'react';
import './Cart.css';
import { faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {
    let totalQuantity = 0;
    let totalPrice = 0;
    for(const dev of props.cart){
        const {key, salary, img, name} = dev;   
            totalQuantity = totalQuantity + 1;
            totalPrice = totalPrice + salary;  
    }
    const devIcon =  <FontAwesomeIcon size="lg" icon={faUser} />
    const dollarIcon =  <FontAwesomeIcon size="lg" icon={faDollarSign} />
    return (
        <div className="cart">
            
            <h2>{devIcon} Developers Added: {totalQuantity} </h2>
            <h2>Total Cost: {dollarIcon} {totalPrice}</h2>
            {   
                props.cart.map(dev => <CartItem key = {dev.key} img = {dev.img} name = {dev.name} ></CartItem>
                )
            }
               
        </div>
    );
};

export default Cart;
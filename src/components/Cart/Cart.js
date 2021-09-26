import React from 'react';
import './Cart.css';
import { faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = (props) => {
    let totalQuantity = 0;
    let totalPrice = 0;
    const addedDev = [];
    for(const dev of props.cart){
        const {key, salary, img, name} = dev;
        if(addedDev.indexOf(key) === -1){
            totalQuantity = totalQuantity + 1;
            totalPrice = totalPrice + salary;
        }
        addedDev.push(key);
    }
    const devIcon =  <FontAwesomeIcon size="lg" icon={faUser} />
    const dollarIcon =  <FontAwesomeIcon size="lg" icon={faDollarSign} />
    return (
        <div className="cart">
            
            <h2>{devIcon} Developers Added: {totalQuantity} </h2>
            <h2>Total Cost: {dollarIcon} {totalPrice}</h2>
               
        </div>
    );
};

export default Cart;
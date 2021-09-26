import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css';

const Developers = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./dev.JSON')
        .then(res => res.json())
        .then(data => setDevelopers(data));
    }, [])
    
    const uniquify = devkey => {
        const key = devkey;
        for(const item of cart){
            if(item.key === key){
                return false;
            }
        }
    }

    const handleAddToCart = developer => {
            const isUnique = uniquify(developer.key);
            if(isUnique === false){
                return;
            }
            const newCart = [...cart, developer];
            setCart(newCart);     
    }
    return (
        <div className = "main-container">
            <div className = "developers-container">
                {
                    developers.map(developer => <Developer key = {developer.key} cartHandler = {handleAddToCart} dev = {developer}></Developer>)
                }
            </div>
            <div className = "cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Developers;
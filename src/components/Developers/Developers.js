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
    const handleAddToCart = developer => {
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
import React, { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import './Developers.css';

const Developers = () => {
    const [developers, setDevelopers] = useState([]);
    useEffect(() => {
        fetch('./dev.JSON')
        .then(res => res.json())
        .then(data => setDevelopers(data));
    }, [])

    return (
        <div className = "main-container">
            <div className = "developers-container">
                {
                    developers.map(developer => <Developer dev = {developer}></Developer>)
                }
            </div>
            <div className = "cart-container">
                <h2>This is Cart</h2>
            </div>
        </div>
    );
};

export default Developers;
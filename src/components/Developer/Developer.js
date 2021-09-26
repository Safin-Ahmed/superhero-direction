import React from 'react';
import './Developer.css';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Developer = (props) => {
    const {img, key, name, skill, level, country, salary, facebook, youtube} = props.dev;
    const facebookIcon = <FontAwesomeIcon size="2x" icon={faFacebook} />;
    const youtubeIcon =  <FontAwesomeIcon size="2x" icon={faYoutube} />;
    const cartIcon =  <FontAwesomeIcon size="lg" icon={faShoppingCart} />;
    return (
        <div className = "developer">
            <img src={img} alt="" />
            <h3>Name: <span>{name}</span></h3>
            <h3>Skill: <span>{skill}</span></h3>
            <h3>Level: <span>{level}</span></h3>
            <h3>Country: <span>{country}</span></h3>
            <h3>Salary: <span>$<span className="salary">{salary}</span></span></h3>
            <button onClick = {() => props.cartHandler(props.dev)} className="add-to-cart">{cartIcon} Add To Cart</button>
            <button><a href= {facebook ? `${facebook}` : `#`}>{facebookIcon}</a></button>
            <button><a href= {youtube ? `${youtube}` : `#`}>{youtubeIcon}</a></button>
        </div>
    );
};

export default Developer;
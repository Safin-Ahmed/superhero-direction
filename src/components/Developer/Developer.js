import React from 'react';

const Developer = (props) => {
    const {img, key, name, skill, level, country, salary, facebook, youtube} = props.dev;
    return (
        <div className = "developer">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h3>Skill: {skill}</h3>
            <h3>Level: {level}</h3>
            <h3>Country: {country}</h3>
            <h3>Salary: {salary}</h3>
            <button><a href= {facebook ? `${facebook}` : `#`}>Facebook</a></button>
            <button><a href= {youtube ? `${youtube}` : `#`}>Youtube</a></button>
        </div>
    );
};

export default Developer;
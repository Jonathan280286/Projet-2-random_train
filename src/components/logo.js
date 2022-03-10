import React from 'react';

const Logo = (props) => {
    return (
        <div className='logo'>
        <img   src='./Images/logoweekend.png' alt='image logo' /> 
        <h1>{props.name}</h1>
        </div>
    );
};

export default Logo;
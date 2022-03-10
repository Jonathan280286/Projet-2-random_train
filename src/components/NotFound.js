import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import './NotFound.css';

const NotFound = () => {
    return (
<div>
     <Logo />
    <img  className='image404' src='./Images/page404.jpeg' alt='image Page 404' /> 
   
  </div>
    );
};

export default NotFound;
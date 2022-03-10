import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const NotFound = () => {

  const retourAccueil = ()=>{
    navigate("/") }

    const navigate = useNavigate()

    return (
<div>
     <Logo />
     <div className='container_404'>
     <div className='containerABC'>
    <img  className='image404' src='./Images/page404.jpeg' alt='image Page 404' /> 
    </div>
    <div className='containerBCD'>
    <button className='button_retour' onClick={retourAccueil}>Changer votre voyage</button>
  </div>
  </div>
  </div>
    );
};

export default NotFound;
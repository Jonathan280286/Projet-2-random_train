import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'


const Navbar = () => {
  return(

  <div className='footer'>
    

          <Link className='footer_color' to="/">Accueil</Link>   <Link className='footer_color' to="PageGenerateur">Page Générateur</Link>   <Link className='footer_color' to="/PageResult">Page Résultat</Link>
 
  </div>  );
}

export default Navbar;
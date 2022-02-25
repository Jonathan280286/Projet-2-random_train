import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return(

  <div>

          <Link to="/">Accueil</Link> -  <Link to="PageGenerateur">Page Générateur</Link> -  <Link to="/PageResult">Page Résultat</Link>
 
  </div>  );
}

export default Navbar;
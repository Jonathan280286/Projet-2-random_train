import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return(

  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="PageGenerateur">Page Générateur</Link>
        </li>
        <li>
          <Link to="/PageResult">Page Résultat</Link>
        </li>
      </ul>
    </nav>
  </div>  );
}

export default Navbar;
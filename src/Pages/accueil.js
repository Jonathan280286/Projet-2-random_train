import React from 'react';
import './accueil.css'
import  Logo from '../components/logo'



const Accueil = () => {
    return (
        <div className="container_accueil">
           <div className="item__accueil__logo">  
                <div className="accueil__logo">                
                    <Logo />
                </div>

                    <div className='accueil__select'>
                        <label for="select-city">Choisissez votre gare de départ :</label>

                        <select name="city" id="select-city">
                            <option value="">-----</option>
                            <option value="dog">Paris</option>
                        </select>
                    </div>
            </div>
            <div className="items_accueil">
                <img   className="image-carte" src='./Images/carteFrance.png' alt='image logo' /> 
            </div>
        </div>
    );
};

export default Accueil;
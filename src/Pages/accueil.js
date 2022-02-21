import React from 'react';
import './accueil.css'
import Logo from '../components/logo'
import { useState } from 'react';

const Accueil = (props) => {
    const [title, setTitle] = useState(" ")
    return (

        <div className="container_accueil">

            <div className="item__accueil__logo">

                <div className="accueil__logo">
                    <Logo />
                </div>

                <div className='accueil__select'>
                    <label for="select-city">Choisissez votre gare de départ :</label><br></br>

                    <select
                    /* je joins inputGare de accueil.js et app.js */
                        onChange={event => props.inputGare(event.target.value)}
                        name="city"
                        id="select-city">
                        <option value="City">Ville</option>
                        <option value="87391003">Gare de Montparnasse</option>
                        <option value="PLY">Paris gare de Lyon</option>
                        <option value="LE">Gare de Lille</option>
                        <option value="NS">Gare de Nantes</option>
                        <option value="MSC">Gare de Marseille</option>
                        <option value="TLE">Gare de Toulouse</option>
                        <option value="MTP">Gare de Montpellier</option>
                        <option value="LYD">Lyon Part-Dieu</option>
                    </select>

                </div>
                <form>

                    <h3 className='codeGare'>{title}</h3>
                </form>
            </div>

            <div className="items_accueil__carte">
                <img className="image-carte" src='./Images/carteFrance.png' alt='image logo' />
            </div>

        </div>
    );
};

export default Accueil;
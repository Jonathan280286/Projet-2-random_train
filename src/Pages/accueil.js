import React from 'react';
import './accueil.css'
import Logo from '../components/logo'
import { useState } from 'react';
import City from '../components/city';


const Accueil = (props) => {
    const [title, setTitle] = useState(" ")
    return (

        <div className="container_accueil">
          

            <div className="item__accueil__logo">

                <div className="accueil__logo">
                    <Logo />
                    <h3 className='texte'> C'est le week-end et vous ne savez pas où partir ?<br />
                        Choisissez votre gare de départ.<br />
                        Nous vous proposons votre destination la plus rapide en train.<br />
                        Et la météo pour vous mieux vous préparer !
                    </h3></div>

                <div className='accueil__select'>
                    <label for="select-city">Choisissez votre gare de départ :</label><br></br>

                    <select
                        /* je joins inputGare de accueil.js et app.js */
                        onChange={event => props.inputGare(event.target.value)}
                        name="city"
                        id="select-city">
                        <option value="City">Ville</option>
                        <option value="87391003">Gare de Montparnasse</option>
                        <option value="87686006">Paris gare de Lyon</option>
                        <option value="87286005">Gare de Lille Flandres</option>
                        <option value="87481002">Gare de Nantes</option>
                        <option value="87751008">Gare de Marseille</option>
                        <option value="87611004">Gare de Toulouse</option>
                        <option value="87688887">Gare de Montpellier</option>
                        <option value="87723197">Lyon Part-Dieu</option>
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
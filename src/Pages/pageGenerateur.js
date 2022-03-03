import Logo from '../components/logo.js'
import Tournicoti from '../components/tournicoti.js'
import '../components/tournicoti.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pageGenerateur.css'

const imageDepart = {
    87391003: "/Images/Montparnasse.jpeg",
    87286005: "/Images/lille_flandre.jpg",
    87688887: "/Images/Montpellier.jpg",
    87686006: "/Images/PLY.jpg",
    87481002: "/Images/Nantes.jpg",
    87751008: "/Images/Marseille.jpg",
    87611004: "/Images/Toulouse.jpg",
    87723197: "/Images/Partdieu.jpg",
  };

  const villes = {
    87391003: "Montparnasse",
    87286005: "Lille-Flandres",
    87688887: "Montpellier",
    87686006: "Paris gare de Lyon",
    87481002: "Nantes",
    87751008: "Marseille",
    87611004: "Toulouse",
    87723197: "Lyon Part-Dieu",
  };

const PageGenerateur = (props) => {

    function imageCity(){
        return imageDepart[props.departStation]
    }
    function city(){
        return villes[props.departStation]
    }

    const navigate = useNavigate()

    const generateur = () => {
        navigate("/pageResult")
    }
    return (
        <div className='imageDepart'>
                
            <div className='containerA'>
                <Logo />
                <div className='container_generateur'>
                    <h2 className='gare_depart'>Votre gare de départ : {city()}</h2>
                    <img src={imageCity()} alt={props.departStation} />
                    <h2>Nous allons vous proposer la meilleure destination de manière aléatoire et optimisée</h2>
                    <h3>Pour cela il suffit de cliquer sur le bouton et notre proposition de voyage vous sera proposée.</h3>
                </div>
                <button className='button' onClick={generateur}>Générer votre destination</button></div>
              

                {/* <h1>Votre gare de départ : {props.departStation}</h1> */}
            {/* Récupération du code gare venant de app.js*/}
                 
                


        </div>

    );
};

export default PageGenerateur;
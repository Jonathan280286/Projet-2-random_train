import Logo from '../components/logo.js'
import Tournicoti from '../components/tournicoti.js'
import '../components/tournicoti.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pageGenerateur.css'
import useSound from 'use-sound';
import dingding from '../components/sounds/dingding2.mp3'

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

    const [play] = useSound(dingding);

    const retourAccueil = ()=>{
        navigate("/") 
    }

   const generateur = () => {      
        setTimeout(()=>{
        play() 
        navigate("/pageResult") 
        },1000)
    }

   
    return (
        <div>
                
            <div className='containerA'>
                <Logo />
                <div className='container_generateur'>
                    <h2 className='gare_depart'>Votre gare de départ : {city()}</h2>
                    <img id='imageVille' src={imageCity()} alt={props.departStation} />
                    <img id='circle' src='./images/circle.gif' alt='' />  
                    <h2 className='gare_depart' >Nous allons vous proposer <br />la meilleure destination de manière aléatoire</h2>
                   <div className='order'>
                    <button className='button_accueil' onClick={retourAccueil}>Changer votre gare de départ</button>
                    <button className='button_generateur' onClick={generateur}>Générer votre destination</button>
                    </div>
                    </div>
                </div>
                
              

                {/* <h1>Votre gare de départ : {props.departStation}</h1> */}
            {/* Récupération du code gare venant de app.js*/}
                 
                


        </div>

    );
};

export default PageGenerateur;
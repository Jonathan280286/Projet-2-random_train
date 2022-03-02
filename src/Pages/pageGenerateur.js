import Logo from '../components/logo.js'
import Tournicoti from '../components/tournicoti.js'
import '../components/tournicoti.css'
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './pageGenerateur.css'


const PageGenerateur = (props) => {
const navigate=useNavigate()

const generateur = () => {
  navigate("/pageResult")
}
    return (
         <div className='imageDepart'>
              
            <div className='containerA'> 
                <Logo/>
                <div className='texte_generateur'>
                <h2>Nous allons vous proposer la meilleure destination de manière aléatoire et optimisée</h2>
                <h3>Pour cela il suffit de cliquer sur le bouton et notre proposition de voyage vous sera proposée.</h3>
                <button className='button' onClick={generateur}>Générer votre destination</button></div>
    
   
                {/* Récupération du code gare venant de app.js
                 <h1>Votre gare de départ : {props.departStation}</h1>
                 <Tournicoti/> */}
                
            </div>
        </div>
        
    );
};

export default PageGenerateur;
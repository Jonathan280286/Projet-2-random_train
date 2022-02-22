import Logo from '../components/logo.js'
import Tournicoti from '../components/tournicoti.js'
import '../components/tournicoti.css'
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';


const PageGenerateur = (props) => {
const navigate=useNavigate()

const generateur = () => {
  navigate("./pageResult")
}
    return (
         <div className='imageDepart'>
              
            <div className='containerA'> 
                <Logo/>
                {/* Récupération du code gare venant de app.js*/}
                 <h1>Votre gare de départ : {props.departStation}</h1> 
                 <Tournicoti/>
                <button className='bouttonGenerateur' onClick={generateur}>Générer votre destination</button>
            </div>
        </div>
        
    );
};

export default PageGenerateur;
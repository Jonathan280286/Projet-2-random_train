

import Logo from '../components/logo.js'
import Tournicoti from '../components/tournicoti.js'
import '../components/tournicoti.css'
import React, { useEffect, useState } from 'react';


const PageGenerateur = (props) => {
    return (
         <div className='imageDepart'>
              
            <div className='containerA'> 
                <Logo/>
                {/* Récupération du code gare venant de app.js */}
                 <h1>Votre gare de départ : {props.departStation}</h1>
                 <Tournicoti/>
                <button className='bouttonGenerateur'>Générer votre destination</button>
            </div>
        </div>
        
    );
};

export default PageGenerateur;
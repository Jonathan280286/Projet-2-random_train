import React from 'react';
import ImageDepart from '../components/imageDepart.js'
import Logo from '../components/logo.js'
import Tournicoti from '../components/tournicoti.js'
import '../components/tournicoti.css'


const PageGenerateur = () => {
    return (
         <div className='imageDepart'>
              
            <div className='containerA'> 
                <Logo/>
                <Tournicoti/>
                <button className='bouttonGenerateur'  >Générer votre destination</button>
                
            </div>
        </div>
        
    );
};

export default PageGenerateur;
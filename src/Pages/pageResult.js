import React from 'react';
import Logo from '../components/logo';
import './pageResult.css'
import HoraireResult from '../components/horaireResult'
import CityResult from '../components/cityResult'
import MeteoResult from '../components/meteoResult'
import LoisirsResult from '../components/loisirsResult'
/* mise en place props (liaison) pour app vers pageResult pour ensuite horaireresult */
const PageResult = (props) => {
    return (
        <div className='imageDepart2'>
                 <div className='containerA'> 
            <Logo />
         

         

               

                    <div className='flex-container-resultat' >

                        <div className='flex-items-resultat-gauche '  >
                           <HoraireResult liaison_n2={props.liaison} departStation3={props.departStation2} arriveeStation2={props.arriveeStation} />
                        </div>
                        <h1>{props.arriveeStation2}</h1>
                        <div className='flex-items-resultat-droite '  >
                            <MeteoResult />
                        </div>
                    </div>

              


</div>

            </div>
   
    );
};

export default PageResult;
import React from 'react';
import Logo from '../components/logo';
import './pageResult.css'
import HoraireResult from '../components/horaireResult'
import CityResult from '../components/cityResult'
import MeteoResult from '../components/meteoResult'
import LoisirsResult from '../components/loisirsResult'
/* mise en place props (liaison) pour app vers pageResult pour ensuite horaireresult */
const PageResult = (props) => {
    /*Function Recuperation gare arrivée  de enfant à Parent */
    const gareArrivee2 = (gareArrivee) => {
        console.log(gareArrivee)
    }
    /* Function Recuperation gare arrivée */
    return (
        <div className='imageDepart2'>
            <div className='containerA'>
                <Logo />

                <div className='flex-container-resultat' >

                    <div className='flex-items-resultat-gauche '  >
                        {/* Recuperation gare arrivée avec le onchangeInput de horaireResult -   de enfant à Parent */}
                        <HoraireResult liaison_n2={props.liaison} departStation3={props.departStation2}
                            onchangeInput={gareArrivee2}
                        />
                    </div>
                    <div className='flex-items-resultat-droite '  >
                        <MeteoResult arrivee={gareArrivee2} />
                    </div>
                </div>




            </div>

        </div>
    );
};

export default PageResult;
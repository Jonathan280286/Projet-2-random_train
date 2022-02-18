import React from 'react';
import Logo from '../components/logo';
import './pageResult.css'
import HoraireResult from '../components/horaireResult'
import CityResult from '../components/cityResult'
import MeteoResult from '../components/meteoResult'
import LoisirsResult from '../components/loisirsResult'

const PageResult = () => {
    return (
        <div className='imageDepart'>
            <div className='flex-container'>

            <div className="flex-items-droite">
                    <Logo />
                </div>

                <div className="flex-items-gauche">

                    <div className='flex-container-resultat' >

                        <div className='flex-items-resultat '  >
                             <HoraireResult /> 
                        </div>

                        <div className='flex-items-resultat '  >
                          <CityResult />
                        </div>
                    </div>

                    <div className='flex-container-resultat' >

                        <div className='flex-items-resultat '  >
                             <MeteoResult /> 
                        </div>


                        <div className='flex-items-resultat '  >
                          <LoisirsResult />
                        </div>

                    </div>

                </div>

               

            </div>
        </div>
    );
};

export default PageResult;
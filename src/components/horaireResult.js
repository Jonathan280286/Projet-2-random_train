import './horaireResult.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function HoraireResult() {
  const [horaires, setHoraires]=useState("")

  useEffect(() =>{
    axios
      .get('https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:87391003/departures?datetime=20220131T160312')
      .then((response) => {
        console.log(response.data)
        setHoraires(response.data.display_informations[0])
      })
  }, [])

    return (
        <div>
          <div className='titre-horaireResult'>Components - Réserver un train - Horaires result</div>
          <p>{horaires.labels}</p>
            <img   src='./Images/horaire.jpg' alt='horaire train' /> 
        </div>
    );

}

export default HoraireResult;






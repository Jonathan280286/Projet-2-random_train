import './horaireResult.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function HoraireResult() {

  const [horaires, setHoraires] = useState("")

  useEffect(() => {
    axios.get('https://8703df2c-baa8-49b3-a102-d2482abfb49a@api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:87391003/departures?datetime=20220131T160312')
      .then((response) => {
        console.log(response.data)
        setHoraires(response.data.display_informations[0])
      })
  }, [])

  return (
    <div>
      <div className='titre-horaireResult'><h2>Les prochains horaires pour votre destination</h2></div>
      <p><h3>Labels : </h3>{horaires.labels}</p>
      <p><h3>N° du train :</h3>{horaires.trip_short_name}</p>
      <img src='./Images/horaire.jpg' alt='horaire train' />
    </div>
  );

}

export default HoraireResult;






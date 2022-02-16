import './horaireResult.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function HoraireResult() {

  const [horaires, setHoraires] = useState("")

  useEffect(() => {
    axios.get('https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:87391003/departures?datetime=20220131T160312', {
      headers
        : { Authorization: "8703df2c-baa8-49b3-a102-d2482abfb49a" }
    })
      .then((response) => {

        setHoraires(response.data.departures)
        console.log(response.data.departures)
      })
  }, [])
  return (
    <div className='departures'>
      {horaires.length > 0 &&
        <ul>
          {horaires.filter((filtre) => filtre === horaires[0] || filtre === horaires[2]).map(departure => {
            return <li key={departure.display_informations.trip_short_name}>
              <h4 className="horaireResult_depart">Prochains départs : {departure.stop_point.name}</h4>
              <h4>Gare d'arrivée : {departure.display_informations.direction}</h4>
              <h4>Type de train : {departure.display_informations.network}</h4>
              <h4>Numéro du train : {departure.display_informations.trip_short_name}</h4>
              <h4>Heure de départ : {departure.stop_date_time.departure_date_time.slice(9)}</h4>
            </li>
          })}
        </ul>
      }
    </div >
  );
}

export default HoraireResult;






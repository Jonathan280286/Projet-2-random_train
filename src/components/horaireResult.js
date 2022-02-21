import './horaireResult.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

/* mise en place props en liaison avec App.js */
function HoraireResult(props) {
  /* Mettre un useState pour fonctionner avec le UseEffet */
  const [horaires, setHoraires] = useState([])
  const [gareDepart, setGareDepart] = useState("87391003")

  useEffect(() => {
    /* authentification + headers + dans le lien la variable gare de depart */
    axios.get(`https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:${gareDepart}/departures?datetime=20220131T160312`, {
      headers
        : { Authorization: "8703df2c-baa8-49b3-a102-d2482abfb49a" }
    })
      .then((response) => {

        setHoraires(response.data.departures)
        console.log(response.data.departures)
      })
  }, [])

  /* Fonction pour trier l'horaire de départ */
  const transformHoraire = (heure) => {
    return heure.slice(9, -2).replace(/\B(?=(\d{2})+(?!\d))/g, "h").concat(' min');
  }
  return (
    <div className='departures'>
      {/* Props venant le page accueil en passant par pageResult */}
      <span className="titre_depart">{props.liaison_n2}</span>
      {horaires.length > 0 &&
        <ul>
          {/* On fait les filter pour filtrer l'api et ensuite un map pour afficher le resultat */}
          {horaires.filter((transilien) => transilien.display_informations.code !== "N").filter((filtre, index) => index === 0 || index === 1).map((departure) => {
            {/* créer un li Key puis un map pour lister les donner et sensuite les filtrer */ }
            return <li key={departure.display_informations.links.id}>
              <h4 className="horaireResult_depart">{departure.stop_point.name}</h4>
              <h4 className='input'>Gare d'arrivée : {departure.display_informations.direction}</h4>
              <h4 className='input'>Train : {departure.display_informations.network}</h4>
              <h4 className='input'>Numéro du train : {departure.display_informations.trip_short_name}</h4>
              <h4 className='input'>Heure de départ : {transformHoraire(departure.stop_date_time.departure_date_time)}</h4>
            </li>
          })}
        </ul>
      }

    </div >
  );
}

export default HoraireResult;
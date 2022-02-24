import './horaireResult.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
/* mise en place props en liaison avec App.js */
function HoraireResult(props) {
  /* Mettre un useState pour fonctionner avec le UseEffet */
  const [horaires, setHoraires] = useState([])
  const [gareDepart, setGareDepart] = useState(props.departStation3)
  const [gareArrivee, setgareArrivee] = useState("")
        
  useEffect(() => {
    /* authentification + headers + dans le lien la variable gare de depart */
    axios.get(`https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:${gareDepart}/departures?datetime=20220131T160312`, {
      headers
        : { Authorization: "8703df2c-baa8-49b3-a102-d2482abfb49a" }
    })
      .then((response) => {
        setHoraires(response.data.departures)
filterHoraire(response.data.departures)
        

      })
  }, [])


  /* Fonction pour trier l'horaire de départ */
  const transformHoraire = (heure) => {
    return heure.slice(9, -2).replace(/\B(?=(\d{2})+(?!\d))/g, "h").concat(' min');
  }

  /* Fonction pour recuperer la gare d'arrivée */
  const filterHoraire = (departures) => {
    const filterHoraires = departures.filter((transilien) => transilien.display_informations.code !== "N").filter((filtre, index) => index === 0 || index === 1)
    setgareArrivee(filterHoraires[0])
  }

  return (
    <div className='departures'>
      {/* Props venant le page accueil en passant par pageResult */}
      <span className="titre_depart">{props.liaison_n2}</span>
      {horaires.length > 0 && gareArrivee !=="" && 
        <ul>
          {/* On fait les filter pour filtrer l'api et ensuite un map pour afficher le resultat */}
           
            {/* créer un li Key puis un map pour lister les donner et sensuite les filtrer */ }
             <li>
              <h3 className="horaireResult_depart">{gareArrivee.stop_point.name}</h3>
              <h3 className='input'>Gare d'arrivée : {gareArrivee.display_informations.direction}</h3>
              <h3 className='input'>Train : {gareArrivee.display_informations.network}</h3>
              <h3 className='input'>Numéro du train : {gareArrivee.display_informations.trip_short_name}</h3>
              <h3 className='input'>Heure de départ : {transformHoraire(gareArrivee.stop_date_time.departure_date_time)}</h3>
            </li>
          
        </ul>

        
      }
      {gareArrivee!==""&&<h1>{gareArrivee.display_informations.direction}</h1>}
    </div >
  );
}
export default HoraireResult;
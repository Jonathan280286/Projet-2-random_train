import './meteoResult.css'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
  
  function MeteoResult(props) { 
    const apiKey = '4c70103e03e28b44ae4a384b910da593'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

  const getWeather = (event) => {
    if (event.key === "Enter") {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.arrivee}&units=metric&APPID=${apiKey}`)        
        .then(response => {
          setWeatherData(response.data)

        }
      )
    }
  }

  const dateBuilder = (d) => {
    let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
    let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  
  return (
    <div className="container">
        
      <input        
        className="inputMeteo" 
        /*placeholder="Entrer la ville........."*/
        onChange={e => setCity(e.target.value)}
 /*Recuperation gare arrivée */
        value={props.arrivee}
        onKeyPress={getWeather}
      />
   
    {(typeof weatherData.main === 'undefined') ? (
      <div>       
        <div className="date">{dateBuilder(new Date())}</div>
        <p>{weatherData.name}</p>
      </div>
    ) : (
      <div className='resultatsOK'>
        <div className="date">{dateBuilder(new Date())}</div>
            <div className='temp'>
            <p>{weatherData.name}</p>
            <p>{Math.round(weatherData.main.temp)}°C</p>
            </div>
        <p className='weather'>{weatherData.weather[0].main}</p>
      </div>
    )
    }

        

    </div>
  )
}

export default MeteoResult;
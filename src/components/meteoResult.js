import React, {useState} from 'react';
import Style from './meteoResult.css';

const api = {
    key: "499305ab886ff05395c7afc2cd53dec4",
    base: "https://api.openweathermap.org/data/2.5"
}





const MeteoResult = () => {

    const dateBuilder = (d) => {
        let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
        let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <div className='main'>
          <main>
            <div className='search-box'>
              <input 
                type="text"
                className="search-bar"
                placeholder="search..."/>
            </div>
            
            <div className='location-box'>
                <div className="location">Paris</div>
                <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
                <div className='temp'>Temp: 06°C.</div>
                <div className='weather'>Soleil</div>
            </div>
        
        
        
          </main>
        </div>
        
    );
};

export default MeteoResult;
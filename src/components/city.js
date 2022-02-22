import React from 'react';


const images =[
    "./images/Bordeaux.jpeg",
    "./images/Lille.jpeg",
    "./images/Lyon.jpeg",
    "./images/Marseille.jpeg",
    "./images/Montpellier.jpeg",
    "./images/Nantes.jpeg",
    "./images/Nice.jpeg",
    "./images/Paris.jpeg",
    "./images/Toulouse.jpeg",
]

const City = () => {
    return (
        <div>
              { 
                images.map((city)=> {
                return (<img className="picture" src={city} alt="images city"/>)
            })}
        </div>
    );
};

export default City;
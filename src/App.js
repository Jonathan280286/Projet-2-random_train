import './App.css';
import Accueil from './Pages/accueil';
import PageGenerateur from './Pages/pageGenerateur';
import PageResult from './Pages/pageResult';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function App(){
  /* je joins inputGare - departStation de accueil.js et app.js */
const [departStation, setdepartStation] = useState(" ")
const navigate=useNavigate()
const inputGare = (value) => {
  setdepartStation(value)
  navigate("./pageGenerateur")
}


  console.log(departStation)
  return (
    <div className="App">

    
      <Routes>
        {/* je joins inputGare de accueil.js et app.js */}
        <Route exact path="/" element={<Accueil inputGare={inputGare}  />} />
        {/*Page 404 avec */}
        <Route path="*" element={<NotFound />} />
        <Route path="/PageGenerateur" element={<PageGenerateur departStation={departStation} />} />
        <Route path="/PageResult" element={<PageResult liaison="Prochain Train à venir" departStation2={departStation} />}  />
      </Routes>
  <Navbar />
    </div>
  );
}

export default App;

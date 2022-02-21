import './App.css';
import Accueil from './Pages/accueil';
import PageGenerateur from './Pages/pageGenerateur';
import PageResult from './Pages/pageResult';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { useState } from 'react';

function App(){
const [departStation, setdepartStation] = useState(" ")
const inputGare = (value) => {
  setdepartStation(value)
}
  console.log(departStation)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* je joins inputGare de accueil.js et app.js */}
        <Route exact path="/" element={<Accueil inputGare={inputGare}  />} />
        {/*Page 404 avec */}
        <Route path="*" element={<NotFound />} />
        <Route path="/PageGenerateur" element={<PageGenerateur departStation={departStation} />} />
        <Route path="/PageResult" element={<PageResult liaison="Prochains Trains" />}  />
      </Routes>
    </div>
  );
}

export default App;

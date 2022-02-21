import './App.css';
import Accueil from './Pages/accueil';
import PageGenerateur from './Pages/pageGenerateur';
import PageResult from './Pages/pageResult';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (

      <div className="App">
      <Navbar /> 
        <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/PageGenerateur" element={<PageGenerateur/>} />
        <Route path="/PageResult" element={<PageResult liaison="Prochains Trains"/>} />
        </Routes>
      </div>

  );
}

export default App;

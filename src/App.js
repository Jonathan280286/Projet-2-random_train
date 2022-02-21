import './App.css';
import Accueil from './Pages/accueil';
import PageGenerateur from './Pages/pageGenerateur';
import PageResult from './Pages/pageResult';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (

      <div className="App">
      <Navbar /> 
        <Routes>
        <Route exact path="/" element={<Accueil/>} />
        <Route path='/404' element={<NotFound/>} />
        <Route path="/PageGenerateur" element={<PageGenerateur/>} />
        <Route path="/PageResult" element={<PageResult liaison="Prochains Trains"/>} />
        </Routes>
      </div>

  );
}

export default App;

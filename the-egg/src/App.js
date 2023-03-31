import './App.css';
import './Main.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Locations from './pages/Locations'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
    <div className="flex-column justify-flex-start min-100-vh">
      <Navbar />
      <div className="container">
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
           <Route 
            path="/locations"
            element={<Locations />}
          />
        </Routes>
      </div>
    </div>
    <Footer/>
  </Router>
  );
}

export default App;

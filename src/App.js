import './App.css';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IkogosiExplore from './pages/IkogosiExplore';
import FajuyiExplore from './pages/FajuyiExplore';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/ikogosi" element={<IkogosiExplore />} />
            <Route path="/fajuyi" element={<FajuyiExplore />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

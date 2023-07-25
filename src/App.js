import './App.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer/Footer';
import Explore from './components/Explore';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IkogosiExplore from './pages/IkogosiExplore';
import FajuyiExplore from './pages/FajuyiExplore';
import Gallery from './pages/Gallery';
import Arinta from './pages/Arinta';
import EsaCave from './pages/EsaCave';
import ErinAyonigba from './pages/ErinAyonigba';
import OlosuntaHill from './pages/OlosuntaHill';
import OroleHills from './pages/OroleHills';
import Babalola from './pages/Babalola';
import EroDam from './pages/Ero-dam';

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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/arinta" element={<Arinta />} />
            <Route path="/esacave" element={<EsaCave />} />
            <Route path="/erin-river" element={<ErinAyonigba />} />
            <Route path="/olosunta" element={<OlosuntaHill />} />
            <Route path="/orole-hills" element={<OroleHills />} />
            <Route path="/babalola" element={<Babalola />} />
            <Route path="/ero-dam" element={<EroDam />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

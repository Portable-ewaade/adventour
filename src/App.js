import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Explore from './pages/Explore';
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
import TourGuide from './pages/Tourguides/TourGuide';
import Review from './pages/Review';
import AboutUs from './pages/AboutUs';
import TourRacheal from './pages/Tourguides/TourRacheal';
import TourSegun from './pages/Tourguides/TourSegun';
import TourGbekele from './pages/Tourguides/TourGbekele';
import TourKehinde from './pages/Tourguides/TourKehinde';
import TourFisayo from './pages/Tourguides/TourFisayo';
import TourValentine from './pages/Tourguides/TourValentine';
import Ureje from './pages/Ureje';


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
            <Route path='/tour' element={<TourGuide />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/arinta' element={<Arinta />} />
            <Route path='/esacave' element={<EsaCave />} />
            <Route path='/erin-river' element={<ErinAyonigba />} />
            <Route path='/olosuntahill' element={<OlosuntaHill />} />
            <Route path='/orole-hills' element={<OroleHills />} />
            <Route path='/ureje' element={<Ureje />} />
            <Route path='/babalola' element={<Babalola />} />
            <Route path='/ero-dam' element={<EroDam />} />
            <Route path='/review' element={<Review />} />
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/racheal' element={<TourRacheal/>}/>
            <Route path='/segun' element={<TourSegun/>}/>
            <Route path='/gbekele' element={<TourGbekele/>}/>
            <Route path='/kehinde' element={<TourKehinde/>}/>
            <Route path='/fisayo' element={<TourFisayo/>}/>
            <Route path='/valentine' element={<TourValentine/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

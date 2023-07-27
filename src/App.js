import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Explore from './pages/Explore';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IkogosiExplore from './pages/IkogosiExplore';
import FajuyiExplore from './pages/FajuyiExplore';
import TourGuide from './pages/Tourguides/TourGuide';
import Review from './pages/Review';
import AboutUs from './pages/AboutUs';
import TourRacheal from './pages/Tourguides/TourRacheal';
import TourSegun from './pages/Tourguides/TourSegun';
import TourGbekele from './pages/Tourguides/TourGbekele';
import TourKehinde from './pages/Tourguides/TourKehinde';
import TourFisayo from './pages/Tourguides/TourFisayo';
import TourValentine from './pages/Tourguides/TourValentine';


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
            <Route path='/vreview' element={<Review />} />
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

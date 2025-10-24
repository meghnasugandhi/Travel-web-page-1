import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

import Header from './components/Header/Header';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import Hero from './components/Main/Hero/Hero';
import Aboutus from './components/Main/Aboutus/Aboutus';
import VacationSpots from './components/Main/vacationspots/vacationspots';
import RecentSearch from './components/Main/Recentsearch/Recentsearch';
import Finestsafetysystem from './components/Finestsafetysystem/Finestsafestysystem';
import AffordableVacationBundles from './components/Affordablevacationbundles/AffordableVacationBundles';
import EliteTouristAttractions from './components/Main/EliteTouristAttractions/EliteTouristAttractions';
import LatestTravelBlog from './components/Main/LatestTravelBlog/LatestTravelBlog';
import Footer from './components/Main/Footer/Footer';
import About1 from "./components/links/about1/About1";
// ✅ FIX: Re-introduced the 'links/' folder as per your project structure confirmation.
import HotelListSection from './components/links/HotelListSection/HotelListSection';
import HotelDetailPage from './components/links/HotelDetails/HotelDetails';
import Tour from "./components/links/Tour/Tour";
import Destination from "./components/links/destination/Destination";
import Villas from "./components/links/Villas/Villas";
import Faq from "./components/links/Faq/Faq";
import Contact from "./components/links/Contact/Contact";


function App() {
 return (
 <Router>
<Header />
<NavbarComponent />

 <Routes>
 {/* Home Page */}
 <Route path="/" element={
 <div className="body1">
 <Hero />
 <Aboutus />
 <VacationSpots />
<RecentSearch />
 <Finestsafetysystem />
 <AffordableVacationBundles />
 <EliteTouristAttractions />
 <LatestTravelBlog />
 <Footer />
 </div>
 } />

 {/* Hotels List Page */}
 <Route path="/hotels" element={<HotelListSection />} />
 <Route path="/tours" element={<Tour />} />
 {/* Hotel Detail Page (Dynamic Route) */}
 <Route path="/Destination" element={<Destination/>}/>
  <Route path="/Villas" element={<  Villas/>}/>
  <Route path="/Faq" element={<Faq />} />
    <Route path="/Contact" element={<Contact />} />
 <Route path="/hotels/:id" element={<HotelDetailPage />} />
<Route path="/about1" element={<About1 />} />
 </Routes>
 </Router>
 );
}

export default App;

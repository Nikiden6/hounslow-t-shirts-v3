import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js'
import Navbar from './Components/NavBar.js';
import Footer from './Components/Footer.js';
import Home from './Pages/Home.js';
import BestSellings from './Pages/BestSellings.js';
import NewReleasesPage from './Pages/NewReleasesPage.js'
import HotDeals from './Pages/HotDeals.js'
import TShirtsForMen from './Pages/TShirtsForMen.js'
import TShirtsForWomen from './Pages/TShirtsForWomen.js'
import TShirtsForKids from './Pages/TShirtsForKids.js'
import Contact from './Pages/Contact.js';
import  './App.css'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className='MainSection'>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/best-sellings" element={<BestSellings />} />
            <Route path="/new-releases" element={<NewReleasesPage />} />
            <Route path="/hot-deals" element={<HotDeals />} />
            <Route path="/t-shirts-for-men" element={<TShirtsForMen />} />
            <Route path="/t-shirts-for-women" element={<TShirtsForWomen />} />
            <Route path="/t-shirts-for-kids" element={<TShirtsForKids />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar.js';
import Footer from './Components/Footer.js';
import Home from './Pages/HomePage.js';
import BestSellings from './Pages/BestSellingsPage.js';
import HotDeals from './Pages/HotDealsPage.js'
import Header from './Components/Header.js'

function App() {
  return (
    
    <Router>
      <Header />
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/best-sellings" element={<BestSellings />} />
        <Route path="/hot-deals" element={<HotDeals />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
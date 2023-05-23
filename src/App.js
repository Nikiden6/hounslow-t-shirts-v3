import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import HomePage from './Pages/HomePage.js';
import BestSellings from './Pages/BestSellingsPage.js';
import HotDealsPage from './Pages/HotDealsPage.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/best-sellings" component={BestSellingsPage} />
        <Route path="/hot-deals" component={HotDealsPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
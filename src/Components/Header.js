import React from 'react';
import '../Components/Header.css'
import logo from  '../data/logo.png'
import { BrowserRouter, Link } from 'react-router-dom';
import Home from '../Pages/HomePage.js';


const Header = () => {
    return (
      <header>
          <Link to = {Home}>
              <img src={logo} alt="Logo" className="logo-image" />
            </Link>
          <div className="search-bar">
              <input type="text" placeholder="Search..."/>
              <button>Search</button>
        </div>
        <div className="text">Text on the right</div>
      </header>
    );
  };

  export default Header
import React from 'react';
import '../Components/Header.css'
import logo from  '../data/logo.png'
import { Link } from 'react-router-dom';

import * as BsIcons from "react-icons/bs" 

const Header = () => {
    return (
      <header className='HeaderSection'>
          <Link to = '/home'>
              <img src={logo} alt="Logo" className="logo-image" />
            </Link>
          <div className="search-bar">
            <input id='Search-input' type="text" placeholder="Search..."/>
            <BsIcons.BsSearch className='Search-icon'/>
          </div>
        <div className="text">Text on the right</div>
      </header>
    );
  };

  export default Header
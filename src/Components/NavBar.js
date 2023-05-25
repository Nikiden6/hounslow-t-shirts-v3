import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import '../Components/Navbar.css'
import BestSellings from '../Pages/BestSellingsPage';

const Navbar = () => {
  return ( 
    <div>
        <div className="navigation-bar">
            <ul>
                <li className="BestSelButton">
                    <Link to ='best-sellings'>Best Sellings</Link>
                </li>
                <li><a href="#">Button 2</a></li>
                <li><a href="#">Button 3</a></li>
                
                <li><a href="#">Button 4</a></li>
                <li><a href="#">Button 5</a></li>
                <li><a href="#">Button 6</a></li>
                <li><a href="#">Contact & About</a></li>
            </ul>
        </div>
    </div>
);
}

export default Navbar;
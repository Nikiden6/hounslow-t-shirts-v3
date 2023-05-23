import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Navbar.css'

const Navbar = () => {
  return ( 
    <div>
        <div className="navigation-bar">
            <ul>
                
                <li className="BestSelButton"><a href="#">Best Sellings</a></li>
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
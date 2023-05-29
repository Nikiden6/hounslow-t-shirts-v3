import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import '../Components/Navbar.css'
import BestSellings from '../Pages/BestSellingsPage';

const Navbar = () => {
  return ( 
    <div>
        <div className="navigation-bar">
            <ul className='HotButtons'>
                    
                        <Link to ='/best-sellings' className='BestSelButton'>Best Sellings</Link>
                    
                    <li><Link to = '/'>New releases</Link></li>  
                    <li><Link to = '/hot-deals'>Hot Deals</Link></li>
                </ul>
                <ul>
                <li>Button 4</li>
                <li> Button 5</li>
                <li>Button 6</li>
                <li>Contact & About</li>
            </ul>
        </div>
    </div>
);
}

export default Navbar;
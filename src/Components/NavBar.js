import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Navbar.css'


const Navbar = () => {
  return ( 
    <div>
        <div className="navigation-bar">
            <h1>Menu</h1>
            <ul className='RedLinks'>
                <Link to ='/best-sellings' className='BestSelButton'>Best Sellings</Link>
                <Link to = '/hot-deals'>Hot Deals</Link>
                <Link to = '/new-releases'>New releases</Link>
            </ul>
                
            <ul className='DefaultLinks'>
                <Link to = '/t-shirts-for-men'>T-Shitrts for men </Link>
                <Link to = '/t-shirts-for-women'>T-Shitrts for women </Link>
                <Link to = '/t-shirts-for-kids'>T-Shitrts for men</Link>
                <Link to = '/contact' className='Contact' >Contact</Link>
            </ul>
            
            
            
        </div>
    </div>
);
}

export default Navbar;
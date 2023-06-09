import React from 'react';
import h_img_1 from '../data/HomePageImg/h_img_1.png';
import h_img_2 from '../data/HomePageImg/h_img_2.png';
import '../Pages/Home.css'
import {Link} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

const Home = () => {
    return (
      <div className='HomePage'>
        <header>
          <h1>Welcome to My Online Shop</h1>
        </header>
        <main>
          {/* Add content like featured products, etc. */}
          <div className='AdvertHome'>
            <div className='ButtonShopNow'>
              <h2>Buy 2 our best t-shirt and get 1 free </h2>
                <button> 
                  <Link to = '/best-sellings'>
                    SHOP NOW
                  </Link>
                </button>  
                <div className='AdvertImg'>
                  <img src= {h_img_1}/>
                  <img src= {h_img_2}/>
              </div>
            </div>
          </div>
        </main>
        <footer>
          {/* Add footer content */}
        </footer>
      </div>
    );
  }

  export default Home
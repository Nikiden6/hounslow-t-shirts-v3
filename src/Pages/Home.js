import React from 'react';
import h_img_1 from '../data/HomePageImg/h_img_1.png';
import h_img_2 from '../data/HomePageImg/h_img_2.png';
import '../Pages/Home.css'
import {Link} from 'react-router-dom'
import {Ts} from '../Components/TshirtList.js'
const Home = () => {
    return (
      
      <div className='HomePage'>
        <header className='HomeHeader'>
          <h1 className='Welcome'>Hounslow 3-D T-Shirts</h1>
        </header>
        <main className='HomeBody'>
          {/* Add content like featured products, etc. */}
          <div className='AdvertHome'>
            <div className='SectionShopNow'>
              <h2 className='BuyText'>Buy 2 our best t-shirt  get 1 free </h2>
              <Link className = 'ShopNowButton' to = '/best-sellings'>
                SHOP NOW
              </Link>
            </div>
            <div className='AdvertImg'>
              <img src= {h_img_1} alt = ""/>
              <img src= {h_img_2}/>
            </div>
          </div>
          <div className='HomeHD'>
            <h1 className='H1HD'>HOT DEALS OF THIS WEEK</h1>
            <div className='AdvertProducts'>
              

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
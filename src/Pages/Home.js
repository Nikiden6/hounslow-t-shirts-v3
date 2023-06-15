import React from 'react';
import h_img_1 from '../data/HomePageImg/h_img_1.png';
import h_img_2 from '../data/HomePageImg/h_img_2.png';
import '../Pages/Home.css'
import {Link} from 'react-router-dom'
import {TshirtList} from '../Components/TshirtList.js'
import { HomeTshirtsList } from '../Components/HomeTshirtsList.js';

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
          <div className='H1HD'>
            <h1 >HOT DEALS OF THIS WEEK</h1>
          </div>

          <div className="tshirt-list">
            {HomeTshirtsList.map((tshirt) => (
              <div key={tshirt.id} className="tshirt-item">
                <Link to = '/best-sellings'>
                  <img src={tshirt.image} alt={tshirt.name} />
                  {tshirt.discount?<div className='discBox'>{tshirt.discount}</div>:null}
                  <h3 className='tshirtName'>{tshirt.name}</h3>
                  <p>Price: {tshirt.price}</p>
                </Link>
              </div>
            ))}
          </div>
               
        </div>

      </main>
      <footer>
        {/* Add footer content */}
      </footer>
    </div>
  );
};

  export default Home
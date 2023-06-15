import React from 'react';
import { HotDealsList } from '../Components/HotDealsList';
import '../Pages/HotDeals.css'


const HotDeals = () => {
    return (
      <div className='bodyHd'>
        <header className='headerHd'>
          <h1 className='h1Hd'>HOT DEALS</h1>
        </header>
        <main className='MainHd'>
          {/* Add content like featured products, categories, etc. */}
          <div className="tshirt-listHd">
            {HotDealsList.map((tshirt) => (
              <div key={tshirt.id} className="tshirt-itemHd">
                  <img src={tshirt.image} alt={tshirt.name} />
                  {tshirt.discount?<div className='discBox'>{tshirt.discount}</div>:null}
                  <h3 className='tshirtName'>{tshirt.name}</h3>
                  <p>Price: £{tshirt.price}</p>
              </div>
              ))}
            </div>
        </main>
        <footer>
          {/* Add footer content */}
        </footer>
      </div>
    );
  }

  export default HotDeals
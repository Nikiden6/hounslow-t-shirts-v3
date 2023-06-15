import React from 'react';
import { BestSellingList } from '../Components/BestSellingList.js';
import '../Pages/BestSellings.css'


const BestSellings = () => {
    return (
      <div className='bodyBs'>
        
        <header>
          <h1>Welcome to BestSellings</h1>
        </header>
        <main className='Main'>
          {/* Add content like featured products, categories, etc. */}
          <div className="tshirt-listB">
            {BestSellingList.map((tshirt) => (
              <div key={tshirt.id} className="tshirt-itemB">
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
  
  export default BestSellings
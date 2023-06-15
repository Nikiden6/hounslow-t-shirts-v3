import React from 'react';
import '../Pages/TShirtsForKids.css'

import i19 from '../../src/data/19.jpeg'
import i20 from '../../src/data/20.jpg'
import i21 from '../../src/data/21.jpg'
import i22 from '../../src/data/22.jpg'
import i23 from '../../src/data/23.jpg'
import i24 from '../../src/data/24.jpg'
import i25 from '../../src/data/25.jpg'
import i26 from '../../src/data/26.jpg'

const TShirtsForKids = () => {
    return (
      <div className='bodyK'>
        
        <header className='headerK'>
          <h1 className='h1K'>Buy our cute printed t-shirts for kids</h1>
        </header>
        <main className='MainK'>
          {/* Add content like featured products, categories, etc. */}
          <div className="tshirt-listK">
            {TShirtsForKidsList.map((tshirt) => (
            <div key={tshirt.id} className="tshirt-itemK">
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
  
  export default TShirtsForKids


  const TShirtsForKidsList = [
  {
    id: 19, 
    name: "Blue ocean of hope",
    price: 26, 
    image: i19,
    discount: '-20%',
  },
  {
    id: 20, 
    name: "RARARA ",
    price: 9, 
    image: i20,
      
  },
  {
    id: 21, 
    name: "Space",
    price: 9, 
    image: i21,
      
  },
  {
    id: 22, 
    name: "Roblox",
    price: 9, 
    image: i22,
    
  },
  {
    id: 23, 
    name: "Spider Kiss",
    price: 7, 
    image: i23,
      
  },
  {
    id: 24, 
    name: "Among Us ",
    price: 26, 
    image: i24,
      
  },
  {
    id: 25, 
    name: "Nourin",
    price: 7.29, 
    image: i25,
    
  },
  {
    id: 26, 
    name: "Venom",
    price: 7.29, 
    image: i26,
    discount: '-15%',
  },
];
import React from 'react';
import '../Pages/TShirtsForWomen.css'



import i10 from '../../src/data/10.jpg'
import i11 from '../../src/data/11.jpg'
import i12 from '../../src/data/12.jpg'
import i13 from '../../src/data/13.jpg'
import i14 from '../../src/data/14.jpg'
import i15 from '../../src/data/15.webp'
import i16 from '../../src/data/16.jpg'
import i17 from '../../src/data/17.jpg'
import i18 from '../../src/data/18.jpg'



const TShirtsForWomen = () => {
    return (
      <div className='bodyWm'>
        
        <header className='headerWm'>
          <h1 className='h1Wm'>Buy our printed t-shirts for WOMen</h1>
        </header>
        <main className='MainWm'>
          
          {/* Add content like featured products, categories, etc. */}
          <div className="tshirt-listWm">
            {TShirtsForWomenList.map((tshirt) => (
              <div key={tshirt.id} className="tshirt-itemWm">
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
  
  export default TShirtsForWomen


  const TShirtsForWomenList = [
    {
        id: 10, 
        name: "Waves",
        price: 11, 
        image: i10,
        
    },
    {
        id: 11, 
        name: "Cosmo ",
        price: 9, 
        image: i11,
        
    },
    {
        id: 12, 
        name: "Hype",
        price: 9, 
        image: i12,
        
    },
    {
      id: 13, 
      name: "For Miss",
      price: 9, 
      image: i13,
      discount: '-20%',
    },
    {
        id: 14, 
        name: "Kiss",
        price: 7, 
        image: i14,
        
    },
    {
        id: 15, 
        name: "Catty ",
        price: 26, 
        image: i15,
        
    },
    {
        id: 16, 
        name: "Rosmarin",
        price: 7.29, 
        image: i16,
        discount: '-15%',
    },
    {
        id: 17, 
        name: "Piece ",
        price: 8.50, 
        image: i17,
        
    },

    {
        id: 18, 
        name: "Where are you",
        price: 7, 
        image: i18,
        
    },

];
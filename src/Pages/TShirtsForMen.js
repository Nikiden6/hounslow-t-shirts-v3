import React from 'react';
import '../Pages/TShirtsForMen.css'

import i1 from '../../src/data/1.jpg'
import i2 from '../../src/data/2.jpg'
import i3 from '../../src/data/3.jpg'
import i4 from '../../src/data/4.jpg'
import i5 from '../../src/data/5.jpg'
import i6 from '../../src/data/6.jpg'
import i7 from '../../src/data/7.jpg'
import i8 from '../../src/data/8.jpg'
import i9 from '../../src/data/9.jpg'




const TShirtsForMen = () => {
    return (
      <div className='bodyTm'>
        
        <header className='headerTm'>
          <h1 className='h1Tm'>Buy our printed t-shirts for Men</h1>
        </header>
        <main className='MainTm'>
          {/* Add content like featured products, categories, etc. */}
          <div className="tshirt-listTm">
            {TShirtsForMenList.map((tshirt) => (
            <div key={tshirt.id} className="tshirt-itemTm">
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
  
  export default TShirtsForMen


  const TShirtsForMenList = [
    {
        id: 1, 
        name: "My life-My Rock",
        price: 11, 
        image: i2,
        
    },
    {
        id: 2, 
        name: "God's Hand ",
        price: 9, 
        image: i2,
        
    },
    {
        id: 3, 
        name: "Gold Heart",
        price: 9, 
        image: i3,
        
    },
    {
      id: 4, 
      name: "For Miss",
      price: 9, 
      image: i4,
      
    },
    {
        id: 5, 
        name: "Rosmarin",
        price: 7, 
        image: i5,
        
    },
    {
        id: 6, 
        name: "Cat of illusion ",
        price: 26, 
        image: i6,
        discount: '-20%',
    },
    {
        id: 7, 
        name: "Venom",
        price: 7.29, 
        image: i7,
        discount: '-15%',
    },
    {
        id: 8, 
        name: "Dark knight ",
        price: 8.50, 
        image: i8,
        discount: '-25%',
    },

    {
        id: 9, 
        name: "God's Hand",
        price: 7, 
        image: i9,
        
    },

];
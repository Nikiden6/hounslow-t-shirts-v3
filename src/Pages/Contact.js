import React from 'react';
import ContactMap from '../Components/ContactMap.js';
import '../Pages/Contact.css'


const Contact = () => {
    return (
      <div className='body'>
        <header className='headerSection' >
          <h1 className='headerText' >Contact and About</h1>
        </header>
        <main className='bodyBottom'>
          {/* Add content like featured products, etc. */}
          <div className='informSection'>
            <h1 className='h1WhoWeAre'>Who we are</h1>
            <p className=''>Are you tired of the same old flat and boring t-shirts? It's time to step into a new dimension of fashion with Hounslow 3D T-Shirt Company! We specialize in bringing your style to life with our cutting-edge 3D designs that will leave everyone in awe.
Immerse yourself in a world of creativity as our talented designers transform your favorite designs into stunning three-dimensional works of art. From striking landscapes to captivating abstract patterns, our 3D t-shirts are guaranteed to turn heads wherever you go.
But it's not just about looks - our 3D t-shirts are also incredibly comfortable. Crafted with premium quality materials, they offer a perfect blend of style and comfort. Whether you're out for a casual stroll, hitting the gym, or attending a special event, our t-shirts will keep you looking and feeling great.</p>
          </div>
          
          <div className='mapSector'>
            <div className='ContactH' >
              <h1 className='ContactH1'>Contact Us</h1>
            </div>
            <div className='mapSectorB' >
              <div className='contactMap'>
                <h3 className='mapH'>Visit our shop</h3>
                <ContactMap />
              </div>
              <div className='list-of-details'>
                <div className='ConDetH'>
                  <h2>Contact Details</h2>
                </div>
                <div className='list'>
                  <ul>
                    <li> tel. number: +447448931755 </li>
                    <li> email adress: tshirt@houncsow.co.uk</li>
                    
                  </ul>
              </div>
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

  export default Contact
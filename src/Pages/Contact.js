import React from 'react';
import ContactMap from '../Components/ContactMap.js';
import '../Pages/Contact.css'


const Contact = () => {
    return (
      <div className='body'>
        <header className='headerSection' >
          <h1 className='headerText' >Contact or find our visit our store</h1>
        </header>
        <main>
          {/* Add content like featured products, etc. */}
          <div className='contactMap'>
            <ContactMap />
          </div>
        </main>
        <footer>
          {/* Add footer content */}
        </footer>
      </div>
    );
  }

  export default Contact
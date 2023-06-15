import React from 'react';
import {NewReleasesList} from '../Components/NewReleasesList.js'
import '../Pages/NewReleases.css'
const NewReleasesPage = () => {
    return (
      <div className='bodyNr'>
        <header className='headerNr'>
          <h1 className='h1Nr' >Shop Our New Releases</h1>
        </header>
        <main className='MainNr'>
          {/* Add content like featured products, etc. */}
          <div className="tshirt-listNr">
            {NewReleasesList.map((tshirt) => (
              <div key={tshirt.id} className="tshirt-itemNr">
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

  export default NewReleasesPage;
import React from 'react';
import TshirtList from '../../TshirtList.js'

const tshirts = ({ TshirtList }) => {

    return (
      <div className="tshirt">
        <img src={productImage} alt={name} />
        <h3>{productName}</h3>
        <p>{price}</p>
        {/* Additional T-shirt details or buttons can be added here */}
      </div>
    );
  }
  
  export default tshirts;
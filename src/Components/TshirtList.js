import React from 'react';
import Tshirt from './Tshirt';

const TshirtList = ({ tshirts }) => {
  return (
    <div className="tshirt-list">
      {tshirts.map((tshirt, index) => (
        <Tshirt key={index} tshirt={tshirt} />
      ))}
    </div>
  );
}

export default TshirtList;
import React from 'react';

const Tshirt = ({ tshirt }) => {
  const { name, image, price } = tshirt;

  return (
    <div className="tshirt">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      {/* Additional T-shirt details or buttons can be added here */}
    </div>
  );
}

export default Tshirt;
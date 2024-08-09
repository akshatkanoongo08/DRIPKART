import React from 'react';

const Cards = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="cards-container">
      {data.map((item) => (
        <div key={item._id} className="card restaurant-card">
            
            
          <img src={item.imageUrl} className="card-img-top" alt='gtxdf'/>
          <h5 className="card-title" style={{textAlign:"center"}}>{item.name}</h5>
          <div className="card-body">
           
            <p className="card-text"  style={{textAlign:"center"}}>{item.description}</p>
          </div>
          <h5 className="card-price" style={{paddingLeft:"5px"}}>${item.price}</h5>
        </div>
      ))}
    </div>
  );
};

export default Cards;

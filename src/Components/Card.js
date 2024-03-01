import React from 'react';
import './css/card.css';
const Card = ({ user }) => {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="card-wrapper">
          <div className="card">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src="./images1/2.jpg"/>
              </div>
          <h2>{user.username}</h2>
          <p>Address: {user.address}</p>
          <p>Destination: {user.destination_name}</p>
          <p>Rating: {user.rating}</p>
         </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Card;
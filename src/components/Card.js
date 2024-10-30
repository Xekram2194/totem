import React from 'react';

function Card({ title, description, url }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className='car-title'>{title}</h3>
      </div>
      <div className="card-body">
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="info-button2">Ver</button>
        </a>
      </div>
    </div>
  );
}

export default Card;


import React from 'react'

function Card({image, text}) {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={text} />
      <div className="card-body">
        <h5 className="card-title">{text}</h5>
      </div>
    </div>
  );
}

export default Card;
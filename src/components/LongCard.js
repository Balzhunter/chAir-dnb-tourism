import React from 'react';
import "./LongCard.css";
import star from "../static/images/star.svg"

function LongCard({name, image_url, price, rating }) {
  return (
    <div className="long-card">
      <img className="long-card__image" src={image_url} />
      <p className="long-card__name">{name}</p>
      <p className="long-card__message">2 Nights PACKAGE All Inclusive</p>
      <p className="long-card__details">From {Math.round(price * 2)} € / person - 3 days</p>
      <div className="long-card__stars">
        <p>5.0</p>
        <img className="long-card__icon" src={star}/>
      </div>
    </div>
  );
}

export default LongCard;
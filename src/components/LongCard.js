import React from 'react';
import "./LongCard.css";
import star from "../static/images/star.svg"

export function LongCard({name, image_url, price, rating }) {
  return (
    <div className="long-card">
      <img className="long-card__image" src={image_url} alt="City" />
      <p className="long-card__name">{name}</p>
      <p className="long-card__message">2 Nights PACKAGE All Inclusive</p>
      <p className="long-card__details">From {price} € / person - 3 days</p>
      <div className="long-card__stars">
        <p>5.0</p>
        <img className="long-card__icon" src={star} alt="Star icon"/>
      </div>
    </div>
  );
}

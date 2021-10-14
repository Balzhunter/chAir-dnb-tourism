import React from 'react';
import "./LongCard.css";
import star from "../static/images/star.svg"

function LongCard() {
  return (
    <div className="long-card">
      <img className="long-card__image" src="https://i.picsum.photos/id/1023/640/640.jpg?hmac=_8IHEtuSj8NEJmClrCKCLMw4NdsSl9xOL13TEhxHP1M"/>
      <p className="long-card__name">Cayman Islands</p>
      <p className="long-card__message">2 Nights PACKAGE All Inclusive</p>
      <p className="long-card__details">From 577 € / person - 3 days</p>
      <div className="long-card__stars">
        <p>5.0</p>
        <img className="long-card__icon" src={star}/>
      </div>
    </div>
  );
}

export default LongCard;
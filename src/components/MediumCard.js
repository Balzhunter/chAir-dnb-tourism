import "./MediumCard.css";
import pink_star from "../static/images/pink_star.svg"

function MediumCard({name, image_url, price, rating }) {
  return (
    <div className="medium-card">
      <img className="medium-card__image" src={image_url} alt="City"/>
      <div className="medium-card__details">
        <div className="medium-card__detail">
          <p className="medium-card__host">superhost</p>
          <p className="medium-card__name">{name}</p>
        </div>
        <div className="medium-card__stars">
          <img className="medium-card__icon" src={pink_star} alt="Star icon"/>
          <p>{rating.toFixed(1)}</p>
        </div>
      </div>
      <p className="medium-card__price">From {Math.round(price)} € / person - 3 days</p>
    </div>
  );
}

export { MediumCard };
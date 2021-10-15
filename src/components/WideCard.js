import "./WideCard.css";

export default function WideCard({
  country,
  verified_stays,
  price,
  start_date,
  end_date,
  img,
}) {
  return (
    <div>
      <div
        className="img-feature"
        style={{
          backgroundImage: `url(${img}) `,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p>{country}</p>
      </div>
      <div className="subtitle_feature">
        <h3>More than {verified_stays} verified stays</h3>
        <p>From {price} € / person - 3 days</p>
      </div>
    </div>
  );
}

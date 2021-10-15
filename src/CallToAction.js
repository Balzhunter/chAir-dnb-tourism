import "./CallToAction.css";
import disclogo from "./disclogo.svg"

export function CallToAction({ title, subtle }) {
  return (
    <div className = "discover-call">
      <p className="discover-call--title">{title}</p>
      <p className="discover-call--subtle">{subtle}</p>
      <div className="discover-call--container">
        <p className="discover-call--char">@</p>
        <button className="discover-call--button">
          Discover accommodations<img src = {disclogo} />
        </button>
      </div>
    </div>
  );
}

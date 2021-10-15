import "./ExplorerButton.css";

export function ExplorerButton({ children, source }) {
  return (
    <div className="explorer--container">
      <img className="explorer--img" src={source} />
      <p className="explorer--title">{children}</p>
    </div>
  );
}

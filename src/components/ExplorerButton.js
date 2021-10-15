import "./ExplorerButton.css";

export function ExplorerButton({ children, source }) {
  return (
    <div className="explorer--container">
      <img className="explorer--img" src={source} />
      <a className="explorer--title" href = {`#${children}`}>{children}</a>
    </div>
  );
}

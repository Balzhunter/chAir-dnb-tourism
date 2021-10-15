import "./ExplorerButton.css";

export function ExplorerButton({ children, source }) {
  return (
    <a className="explorer--container" href = {`#${children}`}>
      <img className="explorer--img" src={source} />
      <p className="explorer--title">{children}</p>
    </a>
  );
}

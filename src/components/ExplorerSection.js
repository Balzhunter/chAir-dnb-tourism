import "./ExplorerSection.css";

export function ExplorerSection({ title, children }) {
  return (
    <div>
      <p className="main-title">{title}</p>
      <div className="explorer--buttons">{children}</div>
    </div>
  );
}

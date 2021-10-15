import "./Cover.css";

export function Cover({ text, children }) {
  return (
    <section className="cover ">
      <div className="absolute">
        <h1 className="name-logo">
          <span className="isotipo">@</span> chairdnb
        </h1>
      </div>
      <div className="container-cover ">
        {text ? <h1 className="text-optional">{text}</h1> : children}
      </div>
    </section>
  );
}

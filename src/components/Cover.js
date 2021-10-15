import "./Cover.css";
import Form from "./Form";

export default function Cover({ text }) {
  return (
    <section className="cover ">
      <div className="absolute">
        <h1 className="name-logo">
          <span className="isotipo">@</span> chairdnb
        </h1>
      </div>
      <div className="container-cover ">
        {text ? <h1 className="text-optional">{text}</h1> : <Form></Form>}
      </div>
    </section>
  );
}

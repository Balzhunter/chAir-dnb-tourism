import Form from "../form/Form";
import "./Cover.css";

export default function Cover({ text }) {
  return (
    <section className="cover ">
      <div className="absolute">
        <h1 className="name-logo">
          <span className="isotipo">@</span> chairdnb
        </h1>
      </div>
      {text ? <h1 className="text-optional">{text}</h1> : <Form></Form>}
    </section>
  );
}

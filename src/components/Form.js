import "./Form.css";

export default function Form({data}) {
  console.log(data);

  return (
    <div className="form_box">
      <h2>Book unique accommodations to code as never before</h2>
      <form className="form">
        <label className="label-form block">Where</label>
        <input className="input-form" type="text" placeholder="Everywhere" />
        <div className="flex">
          <div className="">
            <label className="label-form block">Arrival</label>
            <input
              className="input-form"
              type="text"
              placeholder="dd / mm / yyyy"
            />
          </div>
          <div>
            <label className="label-form block">Departure</label>
            <input
              className="input-form"
              type="text"
              placeholder="dd / mm / yyyy"
            />
          </div>
        </div>
        <label className="label-form block">Developers</label>
        <input className="input-form" type="text" placeholder="1" />
      </form>
      <div className="btn-container">
        <button className="btn-form" type="submit">
          Search
        </button>
      </div>
    </div>
  );
}

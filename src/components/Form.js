import { useEffect, useState } from "react";
import "./Form.css";

export default function Form({data, parentUpdate}) {
  const [place, setPlace] = useState("");
  const [developer, setDeveloper] = useState("");

  function search(e){
    e.preventDefault();
    console.log(data);
    const hasPlace = place.length > 0 ? data.filter((site) => site.name.toUpperCase().includes(place.toUpperCase()) || site.country.toUpperCase().includes(place.toUpperCase())) : data;
    console.log(hasPlace);
    parentUpdate({data: hasPlace, name: place, quantity: developer});
  };

  return (
    <div className="form_box">
      <h2>Book unique accommodations to code as never before</h2>
      <form className="form" onSubmit={search} action="#">
        <label className="label-form block">Where</label>
        <input className="input-form" type="text" placeholder="Everywhere" onChange={(e) => setPlace(e.target.value)} value={place}/>
        <div className="flex">
          <div className="">
            <label className="label-form block">Arrival</label>
            <input
              className="input-form"
              type="text"
              placeholder="mm / dd / yyyy"
              onFocus={(e) => e.target.type = 'date'}
            />
          </div>
          <div>
            <label className="label-form block">Departure</label>
            <input
              className="input-form"
              type="text"
              placeholder="mm / dd / yyyy"
              onFocus={(e) => e.target.type = 'date'}
            />
          </div>
        </div>
        <label className="label-form block">Developers</label>
        <input className="input-form" type="text" placeholder="1" onChange={(e) => setDeveloper(e.target.value)} value={developer} />
        <div className="btn-container">
          <button className="btn-form" type="submit">
            Search
          </button>
        </div>
      </form>
      
    </div>
  );
}

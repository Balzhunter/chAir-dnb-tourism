import { useState } from "react";
import "./Form.css";

export default function Form({data, parentUpdate}) {
  const [place, setPlace] = useState("");
  const [developer, setDeveloper] = useState("");

  const dateFilter = (filtered, start, _end) => {
    if (start && !_end){
      return filtered.filter((site) => new Date(site.start_date) <= new Date(start))
    } else if ( new Date(start) < new Date(_end)){
      return filtered.filter((site) => (new Date(site.start_date) <= new Date(start)) && (new Date(site.end_date) >= new Date(_end)) )
    } else if ( new Date(start) > new Date(_end) ) {
      return [];
    } else {
      return filtered;
    }
  }

  function search(e){
    e.preventDefault();
    const {start, end} = e.target;
    const hasPlace = place.length > 0 ? data.filter((site) => site.name.toUpperCase().includes(place.toUpperCase()) || site.country.toUpperCase().includes(place.toUpperCase())) : data;
    const hasDate = dateFilter(hasPlace, start.value, end.value);
    const days = end.value === "" ? 1 : (new Date(end.value) - new Date(start.value))/3600/24/1000 + 1;
    parentUpdate({data: hasDate, name: place, quantity: developer, days: days});
  };

  return (
    <div className="form_box">
      <h2>Book unique accommodations to code as never before</h2>
      <form className="form" onSubmit={search} action="#">
        <div>
          <label className="label-form block">Where</label>
          <input className="input-form" type="text" placeholder="Everywhere" onChange={(e) => setPlace(e.target.value)} value={place}/>
        </div>
        <div className="flex date__inputs">
          <div>
            <label className="label-form block">Arrival</label>
            <input
              name="start"
              className="input-form"
              type="text"
              placeholder="dd / mm / yyyy"
              onFocus={(e) => e.target.type = 'date'}
            />
          </div>
          <div>
            <label className="label-form block">Departure</label>
            <input
              name="end"
              className="input-form js-end"
              type="text"
              placeholder="dd / mm / yyyy"
              onFocus={(e) => e.target.type = 'date'}
            />
          </div>
        </div>
        <div>
          <label className="label-form block">Developers</label>
          <input className="input-form" type="text" placeholder="1" onChange={(e) => setDeveloper(e.target.value)} value={developer} />
        </div>
        <div className="btn-container">
          <button className="btn-form" type="submit">
            Search
          </button>
        </div>
      </form>
      
    </div>
  );
}

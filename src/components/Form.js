import { useEffect, useState } from "react";
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
    console.log(start.value, end.value)
    console.log(data);
    const hasPlace = place.length > 0 ? data.filter((site) => site.name.toUpperCase().includes(place.toUpperCase()) || site.country.toUpperCase().includes(place.toUpperCase())) : data;
    const hasDate = dateFilter(hasPlace, start.value, end.value);
    console.log(hasDate);
    parentUpdate({data: hasDate, name: place, quantity: developer});
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
              name="start"
              className="input-form"
              type="text"
              placeholder="mm / dd / yyyy"
              onFocus={(e) => e.target.type = 'date'}
            />
          </div>
          <div>
            <label className="label-form block">Departure</label>
            <input
              name="end"
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

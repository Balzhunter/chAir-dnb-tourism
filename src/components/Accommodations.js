import React from "react";
import { MediumCard } from "./MediumCard";
import { Container } from "./Container";
import {  getAllAccommodations } from "../services/accommodations_service"
import { useEffect, useState } from "react";
import { filterArrays } from "../utils/array_filter";

export function Accommodations() {
  const [accommodations, setAccommodations] = useState([]);
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    const fetchAccommodations = async () => {
      const data = await  getAllAccommodations();
      setAccommodations(data);
    };
    fetchAccommodations();
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const leng = 10;
      const rate = 8;
      setInitial(initial => (leng > initial + rate) ? (initial + rate) : (initial + rate - leng));
    }, 2000);
    return () => clearInterval(interval);
  }, [])

  return (
      <div id="Accommodations">
        <Container prefix="center">
          <h2 className="heading">Accommodation around the world</h2>
          <Container prefix="medium-card">
            {filterArrays(accommodations, 8, initial).map((accommodation) => <MediumCard key={accommodation.name} name={accommodation.name} image_url={accommodation.image_url} price={accommodation.price*3} rating={accommodation.rating} />)}
          </Container>
        </Container>
      </div>
  );
}

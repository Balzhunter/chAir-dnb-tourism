import React from "react";
import { MediumCard } from "./MediumCard";
import { Container } from "./Container";
import {  getAllAccommodations } from "../services/accommodations_service"
import { useState } from "react";
import { useEffect } from "react";

export function Accommodations() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchAccommodations = async () => {
      const data = await  getAllAccommodations();
      setAccommodations(data);
    };
    fetchAccommodations();
  }, [])

  return (
      <div id="Accommodations">
        <Container prefix="center">
          <h2 className="heading">Accommodation around the world</h2>
          <Container prefix="medium-card">
            {accommodations.map((accommodation) => <MediumCard key={accommodation.name} name={accommodation.name} image_url={accommodation.image_url} price={accommodation.price} rating={accommodation.rating} />)}
          </Container>
        </Container>
      </div>
  );
}

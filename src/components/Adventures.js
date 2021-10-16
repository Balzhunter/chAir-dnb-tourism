import React from "react";
import { LongCard } from "./LongCard";
import { Container } from "./Container";
import { getAllAdventures } from "../services/adventures_service"
import { useEffect, useState } from "react";
import { filterArrays } from "../utils/array_filter";

export function Adventures() {
  const [adventures, setAdventures] = useState([]);
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    const fetchAdventures = async () => {
      const data = await getAllAdventures();
      setAdventures(data);
    };
    fetchAdventures();
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const leng = 10;
      const rate = 6;
      setInitial(initial => (leng > initial + rate) ? (initial + rate) : (initial + rate - leng));
    }, 2000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="adventures" id = "Adventures">
      <Container prefix="center">
        <h2 className="heading">Discover Chairdnb adventures</h2>
        <p className="subtitle">Multi-day hackatons organized by local experts with activities, meals and accommodation included</p>
        <Container prefix="long-card">
          {filterArrays(adventures, 6, initial).map((adventure) => <LongCard key={adventure.name} name={adventure.name} image_url={adventure.image_url} price={adventure.price*3} rating={adventure.rating} />)}
        </Container>
      </Container>
    </div>
  );
}

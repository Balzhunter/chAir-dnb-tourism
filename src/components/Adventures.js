import React from "react";
import { LongCard } from "./LongCard";
import { Container } from "./Container";
import { getAllAdventures } from "../services/adventures_service"
import { useState } from "react";
import { useEffect } from "react";

export function Adventures() {
  const [adventures, setAdventures] = useState([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const fetchAdventures = async () => {
      const data = await getAllAdventures();
      setAdventures(data);
    };
    fetchAdventures();
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  console.log(timer)
  return (
    <div className="adventures" id = "Adventures">
      <Container prefix="center">
        <h2 className="heading">Discover Chairdnb adventures</h2>
        <p className="subtitle">Multi-day hackatons organized by local experts with activities, meals and accommodation included</p>
        <Container prefix="long-card">
          {(timer % 2 === 0 ? adventures.slice(0,6) : adventures.slice(6,10)).map((adventure) => <LongCard key={adventure.name} name={adventure.name} image_url={adventure.image_url} price={adventure.price*3} rating={adventure.rating} />)}
        </Container>
      </Container>
    </div>
  );
}

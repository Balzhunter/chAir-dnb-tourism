import React from "react";
import { LongCard } from "./LongCard";
import { Container } from "./Container";
import { getAllAdventures } from "../services/adventures_service"
import { useState } from "react";
import { useEffect } from "react";

export function Adventures() {
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    const fetchAdventures = async () => {
      const data = await getAllAdventures();
      setAdventures(data);
    };
    fetchAdventures();
  }, [])

  return (
    <div className="adventures" id = "Adventures">
      <Container prefix="center">
        <h2 className="heading">Discover Chairdnb adventures</h2>
        <p className="subtitle">Multi-day hackatons organized by local experts with activities, meals and accommodation included</p>
        <Container prefix="long-card">
          {adventures.map((adventure) => <LongCard key={adventure.name} name={adventure.name} image_url={adventure.image_url} price={adventure.price} rating={adventure.rating} />)}
        </Container>
      </Container>
    </div>
  );
}

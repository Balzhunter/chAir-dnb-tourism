import React from "react";
import { LongCard } from "./LongCard";
import { Container } from "./Container";
import { getAllExperiences } from "../services/experiences_service"
import { useState } from "react";
import { useEffect } from "react";

export function Experiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const data = await getAllExperiences();
      setExperiences(data);
    };
    fetchExperiences();
  }, [])

  return (
    <div className="experiences" id = "Experiences">
      <Container prefix="center">
        <h2 className="heading">Highly rated experiences</h2>
        <p className="subtitle">Multi-day extreme programming sessions organized by local experts with activities, meals and accommodation included</p>
        <Container prefix="long-card">
          {experiences.map((experience) => <LongCard key={experience.name} name={experience.name} image_url={experience.image_url} price={experience.price} rating={experience.rating} />)}
        </Container>
      </Container>
    </div>
  );
}

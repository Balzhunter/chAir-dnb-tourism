import React from "react";
import { LongCard } from "./LongCard";
import { Container } from "./Container";
import { getAllExperiences } from "../services/experiences_service"
import { useEffect, useState } from "react";
import { filterArrays } from "../utils/array_filter";

export function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    const fetchExperiences = async () => {
      const data = await getAllExperiences();
      setExperiences(data);
    };
    fetchExperiences();
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
    <div className="experiences" id = "Experiences">
      <Container prefix="center">
        <h2 className="heading">Highly rated experiences</h2>
        <p className="subtitle">Multi-day extreme programming sessions organized by local experts with activities, meals and accommodation included</p>
        <Container prefix="long-card">
          {filterArrays(experiences, 6, initial).map((experience) => <LongCard key={experience.name} name={experience.name} image_url={experience.image_url} price={experience.price*3} rating={experience.rating} />)}
        </Container>
      </Container>
    </div>
  );
}

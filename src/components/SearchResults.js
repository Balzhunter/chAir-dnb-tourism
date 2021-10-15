import { LongCard } from "./LongCard";
import { Container } from "./Container";
import { useEffect } from "react";

export function SearchResults({results, quantity, parentUpdate, days}) {

  useEffect(() => {
    document.querySelector('.cover').querySelector("h1").addEventListener('click', () => {
      parentUpdate(null)})
  }, [])

  return (
    <div className="adventures mt-38" id = "Adventures">
      <Container prefix="center">
        <Container prefix="long-card">
          {results.map((adventure) => <LongCard key={adventure.name} name={adventure.name} image_url={adventure.image_url} price={ days*adventure.price*(quantity == "" ? 1 : quantity)} rating={adventure.rating} days={days} person={quantity} />)}
        </Container>
      </Container>
    </div>
  );
}

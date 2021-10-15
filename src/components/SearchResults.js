import React from "react";
import ReactDOM from 'react-dom';
import { LongCard } from "./LongCard";
import { Container } from "./Container";
import { useState } from "react";
import { useEffect } from "react";
import App from "../App"

export function SearchResults({results, quantity, parentUpdate}) {

  React.useEffect(() => {
    document.querySelector('.cover').querySelector("h1").addEventListener('click', () => {
      parentUpdate(null)})
  }, [])

  return (
    <div className="adventures" id = "Adventures">
      <Container prefix="center">
        <Container prefix="long-card">
          {results.map((adventure) => <LongCard key={adventure.name} name={adventure.name} image_url={adventure.image_url} price={ adventure.price*(quantity == "" ? 1 : quantity)} rating={adventure.rating} />)}
        </Container>
      </Container>
    </div>
  );
}

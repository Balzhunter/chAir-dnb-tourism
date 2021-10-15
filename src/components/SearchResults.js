import React from "react";
import { LongCard } from "./LongCard";
import { Container } from "./Container";
import { useState } from "react";
import { useEffect } from "react";

export function SearchResults({results}) {

  return (
    <div className="adventures" id = "Adventures">
      <Container prefix="center">
        <Container prefix="long-card">
          {results.map((adventure) => <LongCard key={adventure.name} name={adventure.name} image_url={adventure.image_url} price={adventure.price} rating={adventure.rating} />)}
        </Container>
      </Container>
    </div>
  );
}

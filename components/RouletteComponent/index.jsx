import React from "react";
import { rValue } from "../../src/helpers/ramdon";

const RouletteComponent = () => {
  let animal = rValue.name;

  return (
    <div>
      Roulette
      <h1>{animal}</h1>
    </div>
  );
};

export default RouletteComponent;

import React from "react";
import AnimalCard from "./AnimalCard";

const ListOfAnimals = () => {
  return (
    <div>
      <h1>ListOfAnimals</h1>
      <div>
        {[1, 2, 3, 4].map((card) => (
          <AnimalCard />
        ))}
      </div>
    </div>
  );
};

export default ListOfAnimals;

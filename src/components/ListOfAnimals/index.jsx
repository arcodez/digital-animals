import React from "react";
import AnimalCard from "../AnimalCard";
import "./style.css";

const ListOfAnimals = ({
  loteryName = "Lotto Activo",
  timeLoteryValue = false,
}) => {
  return (
    <div className="animals_cards">
      <h1 className="animals_list_title">{loteryName}</h1>
      <div className="animals_row">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((card, index) => (
          <AnimalCard key={index} {...card} timeLotery={timeLoteryValue} />
        ))}
      </div>
    </div>
  );
};

export default ListOfAnimals;

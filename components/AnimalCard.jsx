import React from "react";

const AnimalCard = ({ picture, name, number }) => {
  return (
    <div>
      <img src={picture} alt={name} />
      <h3>{name}</h3>
      <h2>{number}</h2>
    </div>
  );
};

export default AnimalCard;

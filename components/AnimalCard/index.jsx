import React from "react";
import "./style.css";

const AnimalCard = ({
  picture = "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg",
  name = "León",
  number = 5,
}) => {
  return (
    <div className="animal_card">
      <img className="card_img" src={picture} alt={name} />
      <h2 className="card-title txt-center">{name}</h2>
      <h3 className="card-subtitle txt-center">{number}</h3>
    </div>
  );
};

export default AnimalCard;

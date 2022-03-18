import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="texts">
        <h1 className="header_title">Bienvenido a los Animalitos Digitales</h1>
        <p className="header_paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          magnam. Perferendis commodi aliquam veritatis tempore, magni soluta
          culpa doloremque distinctio. Numquam quae ut consequatur veritatis
          ipsum voluptate ducimus! Minus, ullam.
        </p>

        <div className="button">
          <button>Show Animals Table</button>
        </div>
      </div>

      <figure className="animal">
        <img
          className="animals_gif"
          src="https://i.pinimg.com/originals/1e/b0/68/1eb0683ac0cd906400fad3e2a9c95b77.gif"
          alt="Tigers Picture"
        />
      </figure>
    </div>
  );
};

export default Header;

import React from "react";
import Layout from "../../Layout/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="txt-center">Bienvenido a La pagina de animalitos</h1>
      <figure className="animal">
        <center>
          <img
            className="animals_gif"
            src="https://i.pinimg.com/originals/1e/b0/68/1eb0683ac0cd906400fad3e2a9c95b77.gif"
            alt="Tigers Picture"
          />
        </center>
      </figure>
    </Layout>
  );
};

export default IndexPage;

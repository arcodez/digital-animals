import React from "react";
import Layout from "../../Layout/Layout";
import ListOfAnimals from "../../ListOfAnimals";

const AnimalTablePage = () => {
  return (
    <Layout>
      <h1 className="txt-center">AnimalTablePage</h1>
      <ListOfAnimals />
    </Layout>
  );
};

export default AnimalTablePage;

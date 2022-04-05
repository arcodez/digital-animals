import React from "react";
import Header from "../../Header";
import Layout from "../../Layout/Layout";
import ListOfAnimals from "../../ListOfAnimals";

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <ListOfAnimals loteryName="Animalitos Digitales" />
    </Layout>
  );
};

export default IndexPage;

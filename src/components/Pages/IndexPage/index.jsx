import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import Header from "../../Header";
import Layout from "../../Layout/Layout";
import ListOfAnimals from "../../ListOfAnimals";

const IndexPage = () => {
  const { isAuth } = useContext(UserContext);

  return (
    <Layout>
      <Header />
      <p style={{ textAlign: "center" }}>
        Login del usuario {"==> "} {`${isAuth}`}
      </p>
      <ListOfAnimals loteryName="Animalitos Digitales" />
    </Layout>
  );
};

export default IndexPage;

import React from "react";
import Layout from "../../Layout/Layout";
import ListOfAnimals from "../../ListOfAnimals";
import "./style.scss";

const urlToFecthWeeks =
  "https://www.tuazar.com/loteria/animalitos/resultados/2022/04/25/";

const ResultsPage = () => {
  return (
    <Layout>
      <div className="results-page">
        <h1>Resultados de Animalitos</h1>

        <div className="results-links">
          <div className="links-result-option">Resultados Hoy</div>
          <div className="links-result-option">Resultados Ayer</div>
          <div className="links-result-option">Resultados De La Semana</div>
        </div>

        <ListOfAnimals timeLoteryValue={true} />
        <ListOfAnimals loteryName="Granjita" timeLoteryValue={true} />
      </div>
    </Layout>
  );
};

export default ResultsPage;

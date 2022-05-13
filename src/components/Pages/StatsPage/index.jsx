import React from "react";
import Layout from "../../Layout/Layout";
import "./styles.scss";

const StatsPage = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>StatsPage</h1>

      <section>
        <h2>Coincidencias de Animalitos </h2>
        <h3>Zamuro {"-->"} Zebra</h3>
      </section>

      <section>
        <h2>Frecuencia de Salida de los Animalitos</h2>

        <h3>El Perro ha salido 4 veces esta semana</h3>
      </section>

      <section>
        <h2>Numero de veces Que salen Rojos o Negros</h2>
        <h3>Esta semana han salido 3 días rojos</h3>
        <h3>Y han salido 4 días negros</h3>
      </section>
    </Layout>
  );
};

export default StatsPage;

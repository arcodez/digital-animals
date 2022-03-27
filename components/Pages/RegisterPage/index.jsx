import React from "react";

const RegisterPage = () => {
  return (
    <Layout>
      <div className="login-page">
        <h1 style={{ margin: "0 auto" }}>Login Page</h1>
        <form action="" className="login-form">
          <h2>Nombre</h2>
          <input type="text" name="name" id="" />

          <h2>Apellidos</h2>
          <input type="text" name="lastName" id="" />

          <h2>Edad</h2>
          <input type="text" name="age" id="" />

          <h2>Email</h2>
          <input type="text" name="email" id="" />

          <h2>password</h2>
          <input type="text" name="password" id="" />

          <button type="submit" value="">
            Iniciar Sesion
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default RegisterPage;

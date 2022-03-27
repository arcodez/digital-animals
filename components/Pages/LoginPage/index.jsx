import React from "react";
import Layout from "../../Layout/Layout";

const LoginPage = () => {
  return (
    <Layout>
      <div className="login-page">
        <h1 style={{ margin: "0 auto" }}>Login Page</h1>
        <form action="" className="login-form">
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

export default LoginPage;

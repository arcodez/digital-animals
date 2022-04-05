import React from "react";
import Layout from "../../Layout/Layout";
import "./style.scss";

const LoginPage = () => {
  return (
    <Layout>
      <div className="login-page">
        <h1>Login Page</h1>
        <form action="" className="login-form">
          <div className="form-group">
            <h2>Email</h2>
            <input className="email-form" type="text" name="email" id="" />
          </div>

          <div className="form-group">
            <h2>password</h2>
            <input type="text" name="password" id="" />
          </div>

          <button className="form-button" type="submit" value="">
            Iniciar Sesion
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;

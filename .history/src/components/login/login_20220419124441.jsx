import React from "react";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <section className={styles.container}>
      <Header title={"Login"} />
      <h1>Login</h1>
    </section>
  );
};

export default Login;

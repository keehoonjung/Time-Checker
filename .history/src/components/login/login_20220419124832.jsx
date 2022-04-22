import React from "react";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <section className={styles.container}>
      <Header title={"Login"} />
      <button style={styles.button}>Google</button>
      <button style={styles.button}>Git</button>
    </section>
  );
};

export default Login;

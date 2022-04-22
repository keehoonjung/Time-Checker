import React from "react";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <section className={styles.container}>
      <Header title={"Login"} />
      <div className={styles.button_container}>
        <button className={styles.button}>Google</button>
        <button className={styles.button}>Git</button>
      </div>
    </section>
  );
};

export default Login;

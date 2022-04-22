import React from "react";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import styles from "./result.module.css";

const Result = (props) => {
  return (
    <div className={styles.container}>
      <Header title={"Timer"} />
      <Navbar />
    </div>
  );
};

export default Result;

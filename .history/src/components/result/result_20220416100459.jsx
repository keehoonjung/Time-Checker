import React from "react";
import Analysis from "../analysis/analysis";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import styles from "./result.module.css";

const Result = (props) => {
  return (
    <div className={styles.container}>
      <Header title={"Timer"} />
      <Analysis />
      <Navbar />
    </div>
  );
};

export default Result;
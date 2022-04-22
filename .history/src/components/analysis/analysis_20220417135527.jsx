import React from "react";
import styles from "./analysis.module.css";

const Analysis = ({ items }) => {
  return (
    <section className={styles.container}>
      {Object.keys(items).map((key) => {
        const item = items[key];
        return <h1>{item.title}</h1>;
      })}
      <div className={styles.graph_container}>
        <div className={styles.outcircle}>
          <div className={styles.innercircle}></div>
        </div>
        <div className="graph"></div>
      </div>
    </section>
  );
};

export default Analysis;

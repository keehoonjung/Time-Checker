import React from "react";
import styles from "./analysis.module.css";

const Analysis = ({ items }) => {
  return (
    <section className={styles.container}>
      {Object.keys(items).map((key) => {
        const item = items[key];
        return <h1>{item.title}</h1>;
      })}
      <div className="graph_container">
        <div className="outcircle">
          <div className="innercircle"></div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;

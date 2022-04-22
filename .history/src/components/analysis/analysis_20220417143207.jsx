import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import styles from "./analysis.module.css";

const Analysis = ({ items }) => {
  const datas = [
    { title: items[1].title, value: 10, color: "#8b22ff" },
    { title: items[2].title, value: 15, color: "#ffc33b" },
  ];
  return (
    <section className={styles.container}>
      {Object.keys(items).map((key) => {
        const item = items[key];
        return <h1>{item.title}</h1>;
      })}
      <PieChart data={datas} lineWidth={18} />
    </section>
  );
};

export default Analysis;

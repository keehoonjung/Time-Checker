import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import styles from "./analysis.module.css";

const Analysis = ({ items }) => {
  const colors = ["#8b22ff", "#ffc33b", "#21f3d6"];
  const datas = Object.keys(items).map((key) => {
    return {
      title: items[key].title,
      value: items[key].time,
      color: colors[key],
    };
  });
  return (
    <section className={styles.container}>
      {Object.keys(items).map((key) => {
        const item = items[key];
        return <h1>{item.title}</h1>;
      })}
      <div className={styles.graph}>
        <PieChart
          data={datas}
          lineWidth={18}
          background="#f3f3f3"
          lengthAngle={360}
          rounded
          animate
          label={({ dataEntry }) => dataEntry.title + dataEntry.value + "%"}
          labelStyle={{
            fontSize: "6px",
            fill: "#33333",
          }}
        />
      </div>
    </section>
  );
};

export default Analysis;

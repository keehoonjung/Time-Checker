import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import styles from "./analysis.module.css";
import Chart from "react-apexcharts";

const Analysis = ({ items }) => {
  const colors = [
    "#8b22ff",
    "#ffc33b",
    "#21f3d6",
    "#063851",
    "#C13019",
    "#9FBA68",
    "#F27013",
  ];
  const datas = Object.keys(items).map((key, index) => {
    return {
      title: items[key].title,
      value: items[key].time,
      color: colors[index],
    };
  });

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Today Result</h1>
      <div className={styles.graph}>
        <PieChart
          data={datas}
          lineWidth={18}
          background="#f3f3f3"
          lengthAngle={360}
          rounded
          animate
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{
            fontSize: "6px",
            fill: "black",
          }}
          labelPosition={80}
        />
      </div>
      <div className="graph">
        <Chart options={options} />
      </div>
    </section>
  );
};

export default Analysis;

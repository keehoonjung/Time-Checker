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
  const titles = Object.keys(items).map((key) => items[key].title);
  const values = Object.keys(items).map((key) => items[key].time);
  const datas = Object.keys(items).map((key, index) => {
    return {
      title: items[key].title,
      value: items[key].time,
      color: colors[index],
    };
  });

  const options = {
    chart: {
      type: "donut",
    },
    annotations: {
      points: [
        {
          x: 0,
          y: null,
          yAxisIndex: 0,
          seriesIndex: 0,
          mouseEnter: undefined,
          mouseLeave: undefined,
          marker: {
            size: 12,
            fillColor: "#fff",
            strokeColor: "#333",
            strokeWidth: 3,
            shape: "circle",
            radius: 2,
            OffsetX: 0,
            OffsetY: 0,
            cssClass: "",
          },
        },
      ],
    },
    labels: titles,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = values;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Today Result</h1>
      <div className="graph">
        <Chart options={options} series={series} type="donut" />
      </div>
    </section>
  );
};

export default Analysis;

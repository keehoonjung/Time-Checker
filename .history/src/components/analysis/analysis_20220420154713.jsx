import React, { useState } from "react";
import styles from "./analysis.module.css";
import Chart from "react-apexcharts";
import { observer } from "mobx-react";

const Analysis = observer(({ store, getDatas }) => {
  const [date, setDate] = useState("today");
  const titles = Object.keys(store.items).map((key) => store.items[key].title);
  const values = Object.keys(store.items).map((key) => store.items[key].time);
  const totalTime = values.reduce((pre, cur) => {
    return pre + cur;
  }, 0);

  function onClick(e) {
    const type = e.target.innerText;
    getDatas(type);
  }

  const options = {
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              ...titles,
            },
            value: {
              fontSize: "14px",
              fontWeight: "bold",
              offsetY: "0px",
              formatter: (value) => {
                return changeNumberToTime(value);
              },
            },
          },
        },
      },
    },
    labels: titles,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
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
      <ul className={styles.button__container}>
        <button className={styles.button}>Custom</button>
        <button
          className={`${styles.button} ${
            date === "today" ? styles.activity : null
          }`}
          onClick={onClick}
        >
          Today
        </button>
        <button className={styles.button}>This Week</button>
        <button className={styles.button} onClick={onClick}>
          Yesterday
        </button>
      </ul>
      <div className={styles.total_time__container}>
        <h1 className={styles.total_time__title}>Total Time</h1>
        <span className={styles.total_time}>
          {changeNumberToTime(totalTime)}
        </span>
      </div>
      <div className={styles.graph}>
        <h1 className={styles.graph__title}>Today Result</h1>
        <Chart options={options} series={series} type="donut" />
      </div>
    </section>
  );
});

export default Analysis;

function changeNumberToTime(number) {
  const hour = Math.floor(number / 3600);
  const minute = Math.floor((number % 3600) / 60);
  const second = number % 60;
  const minuteTime = minute < 10 ? `0${minute}` : minute;
  const secondTime = second < 10 ? `0${second}` : second;

  const time = `${hour}:${minuteTime}:${secondTime}`;
  return time;
}

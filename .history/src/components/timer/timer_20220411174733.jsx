import React from "react";
import styles from "./timer.module.css";

const Timer = (props) => {
  changeNumberToTime(1000);
  changeNumberToTime(3610);
  return (
    <section className={styles.container}>
      <div className={styles.information}>
        <h2 className={styles.time}>0:00:00</h2>
        <h3 className={styles.title}>Study</h3>
      </div>
      <button className={styles.stop_button}>
        <i className="fa-solid fa-circle-stop"></i>
      </button>
    </section>
  );
};

export default Timer;

function changeNumberToTime(number) {
  const hour = Math.floor(number / 3600);
  const minute = Math.floor((number % 3600) / 60);
  const second = number % 60;
  const minuteTime = minute < 10 ? `0${minute}` : minute;
  const secondTime = second < 10 ? `0${second}` : second;

  const time = `${hour}:${minuteTime}:${secondTime}`;
  console.log(time);
}

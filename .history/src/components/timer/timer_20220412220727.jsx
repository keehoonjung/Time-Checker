import React, { useEffect, useState } from "react";
import styles from "./timer.module.css";

const Timer = ({ onAddItem, initailtime, title }) => {
  const [time, setTime] = useState(initailtime);
  const [timer, setTimer] = useState(undefined);
  const onClick = () => {
    const item = { id: Date.now(), title, time };
    clearInterval(timer);
    onAddItem(item);
  };
  useEffect(() => {
    console.log(time);
    const timerStart = setInterval(() => {
      const newTime = time + 1;
      setTime(newTime);
    }, 1000);
    setTimer(timerStart);
    return () => clearInterval(timerStart);
  }, [time]);

  return (
    <section className={styles.container}>
      <div className={styles.information}>
        <h2 className={styles.time}>{changeNumberToTime(time)}</h2>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <button className={styles.stop_button} onClick={onClick}>
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
  return time;
}

function startTime() {}

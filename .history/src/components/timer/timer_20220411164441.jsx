import React from "react";
import styles from "./timer.module.css";

const Timer = (props) => {
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

import React from "react";
import styles from "./timer.module.css";

const Timer = (props) => {
  return (
    <section className="container">
      <div className="information">
        <h2 className="time">0:00:00</h2>
        <h3 className="title">Study</h3>
      </div>
      <button className="stop_button">
        <i className="fa-solid fa-circle-stop"></i>
      </button>
    </section>
  );
};

export default Timer;

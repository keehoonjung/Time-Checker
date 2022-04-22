import React from "react";
import styles from "./todo-item.module.css";

const TodoItem = ({ title, time }) => {
  return (
    <li className={styles.container}>
      <div className={styles.information}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.timer}>
        <p className={styles.time}>{time}</p>
        <button className={styles.start_button}>
          <i className="fa-solid fa-circle-play"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

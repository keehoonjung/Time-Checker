import React from "react";
import styles from "./todo-item.module.css";

const TodoItem = (props) => {
  return (
    <li className={styles.container}>
      <div className={styles.information}>
        <h3 className={styles.title}>Study</h3>
      </div>
      <div className={styles.timer}>
        <p className={styles.time}>00:00:00</p>
        <button className={styles.start_button}>
          <i className="fa-solid fa-circle-play"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

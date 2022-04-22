import React from "react";
import styles from "./todo-item.module.css";

const TodoItem = ({ title, time, id, onStartTimer }) => {
  const onClick = () => {
    onStartTimer(title, time, id);
  };

  const onDoubleClick = () => {
    console.log("hello");
  };
  return (
    <li className={styles.container}>
      <div className={styles.information}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.timer}>
        <p className={styles.time}>{changeNumberToTime(time)}</p>
        <button className={styles.start_button} onClick={onClick}>
          <i className="fa-solid fa-circle-play"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

function changeNumberToTime(number) {
  const hour = Math.floor(number / 3600);
  const minute = Math.floor((number % 3600) / 60);
  const second = number % 60;
  const minuteTime = minute < 10 ? `0${minute}` : minute;
  const secondTime = second < 10 ? `0${second}` : second;

  const time = `${hour}:${minuteTime}:${secondTime}`;
  return time;
}

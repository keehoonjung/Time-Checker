import React from "react";
import styles from "./todo-item.module.css";

const TodoItem = (props) => {
  return (
    <li className="container">
      <div className="information">
        <h3 className="title">Study</h3>
      </div>
      <div className="timer">
        <p className="time">00:00:00</p>
        <button className="start_button">
          <i className="fa-solid fa-circle-play"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

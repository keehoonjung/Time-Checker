import React from "react";
import styles from "./todo-item.module.css";

const TodoItem = (props) => {
  return (
    <li className="container">
      <div className="information">
        <h3 className="title">Study</h3>
      </div>
    </li>
  );
};

export default TodoItem;

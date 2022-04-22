import React from "react";
import TodoItem from "../todo-item/todo-item";
import styles from "./todo-list.module.css";

const TodoList = ({ items }) => {
  return (
    <section className={styles.container}>
      <h1>TodoList</h1>
      <ul className="todo_list">
        {Object.keys(items).map((key) => {
          console.log(key);
          console.log(items.key);
          return (
            <TodoItem key={key} title={items.key.title} time={items.key.time} />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;

import React from "react";
import TodoItem from "../todo-item/todo-item";
import styles from "./todo-list.module.css";

const TodoList = (props) => {
  return (
    <section className={styles.container}>
      <h1>TodoList</h1>
      <ul className="todo_list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </section>
  );
};

export default TodoList;

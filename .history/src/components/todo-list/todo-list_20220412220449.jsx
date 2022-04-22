import React from "react";
import TodoItem from "../todo-item/todo-item";
import styles from "./todo-list.module.css";

const TodoList = ({ items, onStartTimer }) => {
  return (
    <section className={styles.container}>
      <h1>TodoList</h1>
      <ul className="todo_list">
        {Object.keys(items).map((key) => {
          const item = items[key];
          return (
            <TodoItem
              key={key}
              title={item.title}
              time={item.time}
              onStartTimer={onStartTimer}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;

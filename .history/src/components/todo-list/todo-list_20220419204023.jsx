import { observer } from "mobx-react-lite";
import React from "react";
import TodoItem from "../todo-item/todo-item";
import styles from "./todo-list.module.css";

const TodoList = observer(({ items, onStartTimer }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>TODO LIST</h1>
      <ul className="todo_list">
        {Object.keys(items).map((key) => {
          const item = items[key];
          return (
            <TodoItem
              key={key}
              title={item.title}
              time={item.time}
              id={item.id}
              onStartTimer={onStartTimer}
            />
          );
        })}
      </ul>
    </section>
  );
});

export default TodoList;

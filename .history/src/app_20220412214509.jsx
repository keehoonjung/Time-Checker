import styles from "./app.module.css";
import React, { useState } from "react";
import Header from "./components/header/header";
import TodoList from "./components/todo-list/todo-list";
import Input from "./components/input/input";
import Navbar from "./components/navbar/navbar";
import Timer from "./components/timer/timer";

const App = (props) => {
  const [timerStart, setTimerStart] = useState(false);
  const [items, setItems] = useState({
    1: {
      title: "study",
      time: 0,
    },
    2: {
      title: "running",
      time: 12,
    },
  });

  return (
    <div className={styles.container}>
      <Header title={"Timer"} />
      <TodoList items={items} />
      {true ? <Timer /> : <Input />}
      <Navbar />
    </div>
  );
};

export default App;

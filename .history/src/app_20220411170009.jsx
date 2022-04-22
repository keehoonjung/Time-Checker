import styles from "./app.module.css";
import React, { useState } from "react";
import Header from "./components/header/header";
import TodoList from "./components/todo-list/todo-list";
import Input from "./components/input/input";
import Navbar from "./components/navbar/navbar";
import Timer from "./components/timer/timer";

const App = (props) => {
  const [time, setTime] = useState(false);
  const [itmes, setItems] = useState({
    1: {
      title: "study",
      time: "00:00:00",
    },
    2: {
      title: "running",
      time: "00:00:12",
    },
  });
  return (
    <div className={styles.container}>
      <Header title={"Timer"} />
      <TodoList />
      {time ? <Timer /> : <Input />}
      <Navbar />
    </div>
  );
};

export default App;

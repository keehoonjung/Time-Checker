import styles from "./app.module.css";
import React, { useState } from "react";
import Header from "./components/header/header";
import TodoList from "./components/todo-list/todo-list";
import Input from "./components/input/input";
import Navbar from "./components/navbar/navbar";
import Timer from "./components/timer/timer";

const App = (props) => {
  const [timerStart, setTimerStart] = useState(false);
  const [initailTime, setInitialTime] = useState(0);
  const [title, setTitle] = useState(undefined);
  const [id, setId] = useState(undefined);
  const [items, setItems] = useState({
    1: {
      id: 1,
      title: "study",
      time: 0,
    },
    2: {
      id: 2,
      title: "running",
      time: 12,
    },
  });

  const addItem = (item) => {
    const newItems = { ...items };
    const key = item.id;
    newItems[key] = item;
    setItems(newItems);
    setTimerStart(false);
  };

  const onStartTimer = (name, time = 0, id = undefined) => {
    setTitle(name);
    setInitialTime(time);
    console.log(name, time);
    setTimerStart(true);
  };

  return (
    <div className={styles.container}>
      <Header title={"Timer"} />
      <TodoList items={items} onStartTimer={onStartTimer} />
      {timerStart ? (
        <Timer
          onAddItem={addItem}
          title={title}
          initailTime={initailTime}
          id={id}
        />
      ) : (
        <Input onStartTimer={onStartTimer} />
      )}
      <Navbar />
    </div>
  );
};

export default App;

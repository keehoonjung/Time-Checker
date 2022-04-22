import { observe } from "mobx";
import React, { useState } from "react";
import Header from "../header/header";
import Input from "../input/input";
import Navbar from "../navbar/navbar";
import Timer from "../timer/timer";
import TodoList from "../todo-list/todo-list";
import styles from "./main.module.css";

const Main = observe(({ store }) => {
  const [timerStart, setTimerStart] = useState(false);
  const [initailTime, setInitialTime] = useState(0);
  const [title, setTitle] = useState(undefined);
  const [id, setId] = useState(undefined);

  const addItem = (item) => {
    store.addItem(item);
    setTimerStart(false);
  };

  const onStartTimer = (name, time = 0, id = undefined) => {
    setTitle(name);
    setInitialTime(time);
    setId(id);
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
});

export default Main;

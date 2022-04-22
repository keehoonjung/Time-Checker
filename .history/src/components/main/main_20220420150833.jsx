import { observer } from "mobx-react-lite";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import Input from "../input/input";
import Navbar from "../navbar/navbar";
import Timer from "../timer/timer";
import TodoList from "../todo-list/todo-list";
import styles from "./main.module.css";

const Main = observer(({ store, authService, onStartTimer }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [timerStart, setTimerStart] = useState(false);
  const [initailTime, setInitialTime] = useState(0);
  const [title, setTitle] = useState(undefined);
  const [id, setId] = useState(undefined);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  const addItem = (item) => {
    store.addItem(item, userId);
    setTimerStart(false);
  };

  const setOnStartTimer = (name, time = 0, id) => {
    onStartTimer(name, time, id);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  }, [authService, userId, navigate]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const offFunction = store.getItems(userId);

    return () => offFunction();
  }, [store, userId]);

  return (
    <div className={styles.container}>
      <Header title={"Timer"} onLogout={onLogout} />
      <TodoList items={store.items} onStartTimer={onStartTimer} />
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
      <Navbar activity={"timer"} />
    </div>
  );
});

export default Main;

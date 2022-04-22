import { observer } from "mobx-react-lite";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import TodoList from "../todo-list/todo-list";
import styles from "./main.module.css";

const Main = observer(({ store, authService, onStartTimer, onLogout }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();

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
      <Navbar activity={"timer"} />
    </div>
  );
});

export default Main;

import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Analysis from "../analysis/analysis";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import styles from "./result.module.css";

const Result = observer(({ store, authService, onLogout }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();

  function getDatas(type, date = undefined) {
    if (type === "This Week") {
      store.getAllItems(userId, type);
      return;
    }
    store.getItems(userId, type, date);
    // const today = new Date();
    // if (type === "Yesterday") {
    //   const date = new Date(today.setDate(today.getDate() - 1));
    //   store.getItems(userId,date);
    // } else if (type === "This Week") {
    //   const day = new Date(today.setDate(today.getDate() - 1));
    //   store.getAllItems(userId, [day, new Date()]);
    // } else {
    //   store.getItems(userId, date);
    // }
  }

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  }, [authService, userId, navigate]);

  return (
    <div className={styles.container}>
      <Header title={"Result"} onLogout={onLogout} />
      <Analysis store={store} getDatas={getDatas} />
      <Navbar activity={"result"} />
    </div>
  );
});

export default Result;

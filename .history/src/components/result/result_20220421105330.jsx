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

  function getDatas(type) {
    const today = new Date();
    if (type === "Yesterday") {
      const date = new Date(today.setDate(today.getDate() - 1));
      console.log(date);
      store.getItems(userId, date);
    } else {
      store.getItems(userId);
    }
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

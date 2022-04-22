import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Analysis from "../analysis/analysis";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import styles from "./result.module.css";

const Result = observer(({ store, authService }) => {
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

  return (
    <div className={styles.container}>
      <Header title={"Result"} />
      <Analysis store={store} />
      <Navbar activity={"result"} />
    </div>
  );
});

export default Result;

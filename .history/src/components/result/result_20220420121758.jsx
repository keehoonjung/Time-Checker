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

  function getDatas(type) {
    if (type === "yesterday") {
      const date = makeYesterday();
      store.getItmes(userId, date);
    } else {
      store.getItmes(userId);
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
      <Header title={"Result"} />
      <Analysis store={store} getDatas={getDatas} />
      <Navbar activity={"result"} />
    </div>
  );
});

export default Result;

function makeYesterday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate() - 1;

  const day = `/${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;

  return day;
}

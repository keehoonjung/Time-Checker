import styles from "./app.module.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import Result from "./components/result/result";
import Login from "./components/login/login";
import Navbar from "./components/navbar/navbar";
import Timer from "./components/timer/timer";
import Input from "./components/input/input";

const App = ({ authService, ItemsStore }) => {
  const [timerStart, setTimerStart] = useState(false);
  const [initailTime, setInitialTime] = useState(0);
  const [title, setTitle] = useState(undefined);
  const [id, setId] = useState(undefined);

  const onStartTimer = (name, time = 0, id = undefined) => {
    setTitle(name);
    setInitialTime(time);
    setId(id);
    setTimerStart(true);
  };

  const addItem = (item, userId) => {
    ItemsStore.addItem(item, userId);
    setTimerStart(false);
  };

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/main"
            exact
            element={
              <Main
                store={ItemsStore}
                authService={authService}
                onStartTimer={onStartTimer}
                onAddItem={addItem}
              />
            }
          />
          <Route
            path="/result"
            element={<Result store={ItemsStore} authService={authService} />}
          />
        </Routes>
      </BrowserRouter>
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
};

export default App;

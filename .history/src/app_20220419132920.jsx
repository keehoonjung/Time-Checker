import styles from "./app.module.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import Result from "./components/result/result";
import Login from "./components/login/login";

const App = ({ authService, database, ItemsStore }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route
          path="/main"
          exact
          element={<Main store={ItemsStore} authService={authService} />}
        />
        <Route path="/result" element={<Result store={ItemsStore} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

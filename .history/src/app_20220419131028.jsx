import styles from "./app.module.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import Result from "./components/result/result";
import { Items } from "./service/items";
import Login from "./components/login/login";

const ItemsStore = new Items();

const App = ({ authService }) => {
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

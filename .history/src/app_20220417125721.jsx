import styles from "./app.module.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import Result from "./components/result/result";
import { Items } from "./service/items";

const ItemsStore = new Items();

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main store={ItemsStore} />} />
        <Route path="/result" element={<Result store={ItemsStore} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import styles from "./app.module.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import Result from "./components/result/result";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

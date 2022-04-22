import styles from "./app.module.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import styles from "./app.module.css";
import React from "react";
import Header from "./components/header/header";
import TodoList from "./components/todo-list/todo-list";
import Input from "./components/input/input";
import Navbar from "./components/navbar/navbar";

const App = (props) => {
  return (
    <div className={styles.container}>
      <Header title={"Timer"} />
      <TodoList />
      <Input />
      <Navbar />
    </div>
  );
};

export default App;

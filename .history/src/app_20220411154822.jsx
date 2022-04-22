import styles from "./app.module.css";
import React from "react";
import Header from "./components/header/header";
import TodoList from "./components/todo-list/todo-list";
import Input from "./components/input/input";

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <TodoList />
      <Input />
    </div>
  );
};

export default App;

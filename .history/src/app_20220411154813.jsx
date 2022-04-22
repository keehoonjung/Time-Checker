import styles from "./app.module.css";
import React from "react";
import Header from "./components/header/header";
import TodoList from "./components/todo-list/todo-list";

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <TodoList />
    </div>
  );
};

export default App;

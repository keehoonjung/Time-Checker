import React from "react";
import styles from "./main.module.css";

const Main = (props) => {
  return (
    <div className={styles.container}>
      <Header title={"Timer"} />
      <TodoList items={items} onStartTimer={onStartTimer} />
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
      <Navbar />
    </div>
  );
};

export default Main;

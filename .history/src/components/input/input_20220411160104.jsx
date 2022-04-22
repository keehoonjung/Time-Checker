import React from "react";
import styles from "./input.module.css";

const Input = (props) => {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} />
    </div>
  );
};

export default Input;

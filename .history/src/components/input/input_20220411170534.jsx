import React, { useRef } from "react";
import styles from "./input.module.css";

const Input = (props) => {
  const inputRef = useRef();
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} />
      <button className={styles.button}>
        <i className="fa-solid fa-circle-play"></i>
      </button>
    </div>
  );
};

export default Input;

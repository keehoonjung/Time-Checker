import React, { useRef } from "react";
import styles from "./input.module.css";

const Input = ({ onStartTimer }) => {
  const inputRef = useRef();

  const onClick = () => {
    const title = inputRef.current.value;
    if (!title || title === "") {
      return;
    }
    onStartTimer(title);
  };

  return (
    <div className={styles.container}>
      <input ref={inputRef} type="text" className={styles.input} />
      <button className={styles.button} onClick={onClick}>
        <i className="fa-solid fa-circle-play"></i>
      </button>
    </div>
  );
};

export default Input;

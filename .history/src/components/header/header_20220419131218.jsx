import React from "react";
import styles from "./header.module.css";

const Header = ({ title, onLogout }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      {onLogout && (
        <button className={styles.button} onClick={onLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;

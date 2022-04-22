import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = ({ activity }) => {
  const navigate = useNavigate();
  return (
    <ul className={styles.container}>
      <li>
        <button
          className={`${styles.button}`}
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="fa-solid fa-clock"></i>
        </button>
      </li>
      <li>
        <button className={styles.button}>
          <i className="fa-solid fa-calendar"></i>
        </button>
      </li>
      <li>
        <button
          className={styles.button}
          onClick={() => {
            navigate("/result");
          }}
        >
          <i className="fa-solid fa-chart-simple"></i>
        </button>
      </li>
    </ul>
  );
};

export default Navbar;

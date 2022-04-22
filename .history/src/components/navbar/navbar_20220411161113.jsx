import React from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <ul className="container">
      <li>
        <button className="button">
          <i class="fa-solid fa-clock"></i>
        </button>
      </li>
      <li>
        <button className="button"></button>
      </li>
      <li>
        <button className="button"></button>
      </li>
    </ul>
  );
};

export default Navbar;

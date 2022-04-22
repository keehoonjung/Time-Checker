import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate({
      pathname: "/main",
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    const value = event.target.innerText;
    authService //
      .login(value)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });
  return (
    <section className={styles.container}>
      <Header title={"Login"} />
      <div className={styles.button_container}>
        <button className={styles.button} onClick={onLogin}>
          Google
        </button>
        <button className={styles.button} onClick={onLogin}>
          Git
        </button>
      </div>
    </section>
  );
};

export default Login;

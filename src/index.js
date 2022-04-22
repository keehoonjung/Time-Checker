import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";
import DatabaseSerivice from "./service/database";
import { Items } from "./service/item_store";

const authService = new AuthService(firebaseApp);
const database = new DatabaseSerivice();
const ItemsStore = new Items(database);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      ItemsStore={ItemsStore}
      database={database}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

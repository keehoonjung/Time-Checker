import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1flmx8ZR73GZsx7E3d_DbJ8NN-k41kxY",
  authDomain: "timescheduler-79792.firebaseapp.com",
  projectId: "timescheduler-79792",
  databaseURL: "https://timescheduler-79792-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

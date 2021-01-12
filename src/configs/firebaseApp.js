import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcjjDR2ul9YqoCLwQuIWkdccGMzO0f2pk",
  authDomain: "cra-todolist-0111.firebaseapp.com",
  projectId: "cra-todolist-0111",
  storageBucket: "cra-todolist-0111.appspot.com",
  messagingSenderId: "656008288880",
  appId: "1:656008288880:web:6c983bf827d7c92af132b5",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

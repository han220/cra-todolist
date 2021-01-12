import React from "react";
import firebase from "firebase";
import { firebaseApp } from "../configs/firebaseApp";

function Login() {
  return (
    <div>
      <button
        onClick={() =>
          firebaseApp
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        }
      >
        Sign In with google
      </button>
    </div>
  );
}

export default Login;

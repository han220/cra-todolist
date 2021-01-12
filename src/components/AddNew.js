import React, { useRef } from "react";
import firebase from "firebase";
import { firebaseApp } from "../configs/firebaseApp";

import "./AddNew.css";

function AddNew() {
  const inputRef = useRef();
  return (
    <div id="addnew">
      <h3>새로운 아이템 추가</h3>
      <form>
        <input ref={inputRef} placeholder="새로운 할 일을 입력해주세요" />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            firebaseApp
              .firestore()
              .collection("todos")
              .add({
                created: firebase.firestore.FieldValue.serverTimestamp(),
                title: inputRef.current.value,
                checked: false,
                author: firebaseApp.auth().currentUser.uid,
              })
              .then((doc) => {
                inputRef.current.value = "";
              });
            console.log(inputRef.current.value);
          }}
        >
          추가
        </button>
      </form>
    </div>
  );
}

export default AddNew;

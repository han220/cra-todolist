import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { firebaseApp } from "../configs/firebaseApp";
import TodoItem from "./TodoItem";

import "./ListTodos.css";

function ListTodos() {
  // const [todos, setTodos] = useState([]);
  // useEffect(async () => {
  //   const snapshot = await firebaseApp
  //     .firestore()
  //     .collection("todos")
  //     .where("author", "==", firebaseApp.auth().currentUser.uid)
  //     .get();
  //   snapshot.forEach((doc) => console.log(doc.data()));
  // }, []);
  // console.log(todos);

  const [value, loading, error] = useCollection(
    firebaseApp
      .firestore()
      .collection("todos")
      .where("author", "==", firebaseApp.auth().currentUser.uid),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (loading) return <div>데이터베이스 로딩중...</div>;

  console.log(value.docs);

  return (
    <div>
      <h3>목록 확인</h3>
      <table id="listTable">
        <thead>
          <tr className="center">
            <td></td>
            <td>할 일 이름</td>
            <td>수정</td>
            <td>삭제</td>
          </tr>
        </thead>
        <tbody>
          {value.docs
            .map((doc) => ({ id: doc.id, ...doc.data() }))
            .sort((a, b) => b.created - a.created)
            .map((data) => (
              <TodoItem key={data.id} todo={data} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodos;

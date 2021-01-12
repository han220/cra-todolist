import React, { useEffect, useState } from "react";
import { firebaseApp } from "../configs/firebaseApp";

function TodoItem({ todo }) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(todo.title);

  useEffect(() => !editMode && setTitle(todo.title), [todo.title, editMode]);

  const saveData = () => {
    // Update Title
    setEditMode(false);
    firebaseApp
      .firestore()
      .collection("todos")
      .doc(todo.id)
      .update({
        title: title,
      })
      .then(() => setEditMode(false))
      .catch(() => setTitle(todo.title));
  };

  const deleteData = () => {
    // Delete Item
    firebaseApp.firestore().collection("todos").doc(todo.id).delete();
  };

  const changeCheckmark = () => {
    firebaseApp.firestore().collection("todos").doc(todo.id).update({
      checked: !todo.checked,
    });
  };

  return (
    <tr>
      <td className="center checkmark">
        <input
          checked={todo.checked}
          onChange={changeCheckmark}
          type="checkbox"
        />
      </td>
      <td className={`title ${todo.checked && "checked"}`}>
        {editMode ? (
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        ) : (
          title
        )}
      </td>
      <td className="center edit">
        {editMode ? (
          <input type="button" onClick={saveData} value="저장" />
        ) : (
          <input type="button" onClick={() => setEditMode(true)} value="수정" />
        )}
      </td>
      <td className="center delete">
        <input type="button" value="삭제" onClick={deleteData} />
      </td>
    </tr>
  );
}

export default TodoItem;

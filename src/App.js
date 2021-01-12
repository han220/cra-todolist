import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import AddNew from "./components/AddNew";
import ListTodos from "./components/ListTodos";
import Login from "./components/Login";
import { firebaseApp } from "./configs/firebaseApp";

function App() {
  // User Auth status
  const [user, loading] = useAuthState(firebaseApp.auth());
  if (loading) return <div>Loading...</div>;

  // Show Login page if user is not logged in.
  if (!user) return <Login />;

  console.log(user);

  return (
    <div>
      <pre>
        Welcome {user.displayName}({user.email})
      </pre>
      <button onClick={() => firebaseApp.auth().signOut()}>Logout</button>
      <h1>Cra Todo Project</h1>
      <AddNew />
      <ListTodos />
    </div>
  );
}

export default App;

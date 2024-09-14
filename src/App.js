import React, { Suspense } from "react";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <h1>Users List</h1>
      <Suspense fallback={<div>Loading users...</div>}>
        <UserList />
      </Suspense>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Tasks from "./components/Tasks";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <div>
      {!token ? (
        <>
          <Login setToken={setToken} />
          <Register />
        </>
      ) : (
        <Tasks token={token} />
      )}
    </div>
  );
}

export default App;

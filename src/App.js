import React, { useState } from "react";
import Login from "./Pages/StudentPages/Login";
import Home from "./Pages/StudentPages/Home";



export default function App(props) {
  const [user, setUser] = useState(null);

  if (user) {
      return <Home user={user} handleLogin={(value)=>setUser(value)} />;
  }

  return (
    <div>
      <Login handleLogin={(value)=>setUser(value)} />
    </div>
  );
}

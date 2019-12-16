import React, { useState } from "react";
import Login from "./Pages/StudentPages/Login";
import Home from "./Pages/StudentPages/Home";

export default function App() {
  const [user, setUser] = useState(null);
  const [token,setToken] = useState('')

  const handleLogin = (user,token)=>{setUser(user);setToken(token)}

  if (user) {
      return <Home user={user} token={token} handleLogin={handleLogin} />;
  }

  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
}

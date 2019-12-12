import React, { useState } from "react";
import Login from "./Pages/StudentPages/Login";
import Home from "./Pages/StudentPages/Home";



export default function App(props) {
  const [user, setUser] = useState(null);
  const [token,setToken] = useState('')

  if (user) {
      return <Home user={user} token={token} handleLogin={(user,token)=>{setUser(user);setToken(token)}} />;
  }

  return (
    <div>
      <Login handleLogin={(user,token)=>{setUser(user);setToken(token)}} />
    </div>
  );
}

import React, { useState} from 'react';
import Login from './Login';
import Home from './Home';

var authVal = false;

export default function RenderStudentLogin(){

  const [user,setUser] = useState(null);

  const submit=(value)=>{
      setUser(value);
      authVal = true;
    }

    if(user){
      if(authVal){
        return (<Home user={user} handleLogin={submit}/>)
    }
  }

    return <Login handleLogin={submit}/>
}

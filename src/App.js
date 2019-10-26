import React, { useState} from 'react';
import Login from './Pages/StudentPages/Login';
import Home from './Pages/StudentPages/Home';

var authVal = false;

function App(){

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
export default App;

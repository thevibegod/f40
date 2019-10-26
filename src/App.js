import React, { useState} from 'react';
import Login from './Pages/StudentPages/Login';
import Home from './Pages/StudentPages/Home';

var authVal = false;

export default function App(props){

  const [user,setUser] = useState(null);

  const submit=(value)=>{
      setUser(value);
      authVal = true;

    }
    const handlePage =() => {
      props.pageSetter('mentor');
    }
    if(user){
      if(authVal){
        return (<Home user={user} handleLogin={submit}/>)
    }
  }

    return (<div>
    <Login handleLogin={submit}/>
    <p onClick={()=>handlePage()}>Mentor Login</p>
    </div>)
}

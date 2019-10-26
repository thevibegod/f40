import React, { useState} from 'react';
import Login from './Login';
import Home from './Home';

var authVal = false;

export default function RenderStudentLogin(props){

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

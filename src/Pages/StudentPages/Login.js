import React, { Component } from 'react';
import './index.css';

class Login extends Component {

constructor(props){
  super(props);
}

  state={username:'',password:''}

  handleChange=(event) => {
    if(event.target.type==='text'){
      this.setState({username:event.target.value})
    }else{
      this.setState({password:event.target.value})
    }
  }

  submit=(event)=>{
    if(this.state.username==='admin'&&this.state.password==='admin'){
      this.props.handleLogin('17BECXXX');
    }
  }

  render() {

      return(

        <div className="LoginContainer" style={loginPage}>
        <div style={{textAlign:'center',fontFamily:'serif',fontSize:'25px'}}>
          <h1>Department of Electronics & Communication Engineering</h1>
          <h2>Kumaraguru College of Technology</h2>
          <h3>Student Portal - Log in</h3>
        </div>
        <div style={loginBox}>
          <center>
          <p>User Name</p>
          <input type="text" onChange={this.handleChange} />
          <p>Password</p>
          <input type="password" onChange={this.handleChange}/>
          <br/>
          <input type="button" style={{marginTop:"20px"}} onClick={this.submit} value="Log in"/>
          </center>
        </div>
        </div>
      )
    }
}

export default Login;



const loginPage = {
  display:'flex',
  padding:'50px',
  justifyContent:'space-between',
  flexDirection:'column',
  alignItems:'center'
}

const loginBox = {
 width: '500px',
 height:'200px',
 paddingBottom: '30px',
 border: '2px solid gray',
 background:'rgba(255,255,255,0.2)',
 fontFamily:'Helvetica',
 fontSize:'20px',
 fontWeight:'bold'
}

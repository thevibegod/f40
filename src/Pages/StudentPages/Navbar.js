import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component{

constructor(props){
  super(props);
}

  killLogin = () => {
    this.props.handleLogin(null);
  }

render(){
  return(
    <div className="container-fluid">
        <nav className="navbar navbar-inverse">

          <ul className="navbar navbar-nav">
            <li style={listItemStyles}><Link to={'/'}>Home</Link></li>
            <li style={listItemStyles}><Link to={`/Profile&${this.props.username}`}>Profile</Link></li>
            <li style={listItemStyles}><Link to={`/Tasks&${this.props.username}`}>Tasks</Link></li>
            <li style={listItemStyles}><Link to={`/Assessments&${this.props.username}`}>Assessments</Link></li>
            <li style={listItemStyles}><Link to={`/Notifications&${this.props.username}`}>Notifications</Link></li>
            <li style={listItemStyles}><Link to={`/Courses&${this.props.username}`}>Courses</Link></li>
            <li style={listItemStyles}><button style={{padding:'0',background:'none',border:'none',fontSize: '20px'}} id="logout" onClick={this.killLogin}>Logout</button></li>
          </ul>

        </nav>
          </div>
)}

}


const listStyles = {
  textDecoration:'none',
  listStyleType:'none',
  display:'flex',
  margin:'0',
  paddingTop:'10px',
  float:'right'
}

const listItemStyles = {
  paddingRight:'20px',
  fontFamily:"Helvetica",
  fontSize: '20px',
}

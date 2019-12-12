import React from 'react';
import axios from 'axios';
import { Card,Image,Row } from "react-bootstrap";

export default class Profile extends React.Component{
  constructor(props){
    super(props);
  }
  state = {profileDetails:{},profilePicture:{},achievementDetails:{details:["Attended SIH","NPTEL TOPPER"]}}

  componentDidMount(){
    let data;
    const headers = {
      'Content-Type':'application/json',
      'X-Access-Token':this.props.token
    }

    axios.get(`https://cors-anywhere.herokuapp.com/f40-server.adarshfrompupil.now.sh/studentprofiledetails?rollNo=${this.props.user}`,{headers}).then(res=>this.setState({profileDetails:res.data}))
      .then(()=>fetch(`https://cors-anywhere.herokuapp.com/f40-server.adarshfrompupil.now.sh/studentprofilepicture?rollNo=${this.props.user}`,{headers}))
        .then(res=>res.blob()).then((blob)=>this.setState({profilePicture:URL.createObjectURL(blob)}))
  }

  render(){

    return(
  <div style={profileContainerStyle}>
    <div style={{marginBottom:'60px'}}>
    <center>
      <h1>My Profile</h1>
    </center>
    </div>
    <Card style={{justifyContent:"space-around",flexDirection:"row",display:'flex',border:'1px solid gray',padding:'20px',margin:'10px',borderRadius:'5px'}}>
    <div>
    <Image src={this.state.profilePicture} alt="No image"  fluid roundedCircle style={{height:"300px",
    width:"280px",}}/>
    </div>
    <div>
    <p><b>Name:</b>{this.state.profileDetails.name}</p>
    <p><b>RollNo:</b>{this.state.profileDetails.rollNo}</p>
    <p><b>Batch:</b>{this.state.profileDetails.batch}</p>
    <p><b>Mentor Name:</b>{this.state.profileDetails.mentorName}</p>
    <p><b>Attendance:</b>{this.state.profileDetails.attendance}</p>
    </div>
    </Card>
    <Card style={{justifyContent:"space-around",flexDirection:"row",display:'flex',border:'1px solid gray',padding:'20px',margin:'10px',borderRadius:'5px'}}>
    <div>
    <p>Achievements</p>
    <ol>
    {this.state.achievementDetails.details.map((data)=>{
      return <li>{data}</li>
    })}
    </ol>
    </div>
    </Card>
  </div>
);
}
}

const profileContainerStyle = {

    fontFamily:"Helvetica",
    fontSize: '20px',
}

const profileImageStyle = {
  height:"250px",
  width:"250px",
  borderRadius:"50%"
}

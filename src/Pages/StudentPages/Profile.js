import React from 'react';
import axios from 'axios';
import { Card,Image,Row } from "react-bootstrap";
import Loading from './Loading';

import server from '../../config/server';


export default class Profile extends React.Component{
  constructor(props){
    super(props);
  }
  state = {profileDetails:{},profilePicture:{},profileLoading:true,profilePictureLoading:true}

  componentDidMount(){
    const headers = {
      'Content-Type':'application/json',
      'X-Access-Token':this.props.token
    }

    axios.get(server+`/studentprofiledetails?rollNo=${this.props.user}`,{headers}).then(res=>this.setState({profileDetails:res.data,profileLoading:false}))
      .then(()=>fetch(server+`/studentprofilepicture?rollNo=${this.props.user}`,{headers}))
        .then(res=>res.blob()).then((blob)=>this.setState({profilePicture:URL.createObjectURL(blob),profilePictureLoading:false}))
  }

  Achievements = ({achievements}) => {
    if(achievements===undefined || achievements.length===0){
      return null;
    }
    return (
      <Card style={{justifyContent:"space-around",flexDirection:"row",display:'flex',border:'1px solid gray',padding:'20px',margin:'10px',borderRadius:'5px'}}>
      <div>

      <ol>
        <b>Achievements</b>
      {achievements.map((data)=>{
        return <li>{data}</li>
      })}
      </ol>
      </div>
      </Card>
    );
  }

  render(){
    console.log(this.state)
    return(
  <div style={profileContainerStyle}>
    <div style={{marginBottom:'60px'}}>
    <center>
      <h1>My Profile</h1>
    </center>
    </div>
    <Card style={{justifyContent:"space-around",flexDirection:"row",display:'flex',border:'1px solid gray',padding:'20px',margin:'10px',borderRadius:'5px'}}>
    <div>
    {this.state.profilePictureLoading?<Loading/>:<Image src={this.state.profilePicture} alt="No image"  fluid roundedCircle style={{height:"300px",
    width:"280px",}}/>}
    </div>

    {this.state.profileLoading?<Loading/>:<div><p><b>Name:</b>{this.state.profileDetails.name}</p>
    <p><b>RollNo:</b>{this.state.profileDetails.rollNo}</p>
    <p><b>Batch:</b>{this.state.profileDetails.batch}</p>
    <p><b>Email:</b>{this.state.profileDetails.mailId}</p>
  </div>}
    </Card>
    <div>
      <Card style={{justifyContent:"space-around",flexDirection:"row",display:'flex',border:'1px solid gray',padding:'20px',margin:'10px',borderRadius:'5px'}}>
        <b>Student Mentor Details</b>
        {this.state.profileLoading?<Loading/>:<div><p><b>Name:</b>{this.state.profileDetails.studentMentorName}</p>
        <p><b>Email:</b>{this.state.profileDetails.studentMentorMail}</p>
        <p><b>Contact No.:</b>{this.state.profileDetails.studentMentorPhone}</p>
      </div>}
      </Card>
      <Card style={{justifyContent:"space-around",flexDirection:"row",display:'flex',border:'1px solid gray',padding:'20px',margin:'10px',borderRadius:'5px'}}>
        <b>Faculty Mentor Details</b>
        {this.state.profileLoading?<Loading/>:<div><p><b>Name:</b>{this.state.profileDetails.facultyMentorName}</p>
        <p><b>Email:</b>{this.state.profileDetails.facultyMentorMail}</p>
        <p><b>Contact No.:</b>{this.state.profileDetails.facultyMentorPhone}</p>
      </div>}
      </Card>
    </div>
    {this.Achievements}
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

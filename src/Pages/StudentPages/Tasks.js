import React from 'react';
import {Col,Card,Button,Form,Accordion} from 'react-bootstrap';
import Loading from './Loading';
import axios from 'axios';
import server from '../../config/server';
const bson = require('bson');

export default class Tasks extends React.Component{

  state = {
    task_data:{},
    isLoading:true,
    file:null,
    feedback:'',
    fileName:'',
    topic:'',
    taskType:''
  }

  componentDidMount(){
    const headers = {
      "Content-Type": "application/json",
      "X-Access-Token": this.props.token
    };
    axios.get(server+'/alltasks',{headers}).then(res=>this.setState({task_data:res.data,isLoading:false}));
  }


  checkAttachments = (attachmentArray, taskType, topic) =>{

    var obj = attachmentArray.filter(task => task.rollNo === this.props.user);

    if(obj.length){
      var obj = obj[0];
      return(
        <form onSubmit={this.handleSubmitClear}>
          <input type="hidden" name="taskType" value={taskType} />
          <input type="hidden" name="topic" value={topic} />
          <div className="row form-group">
            <div className="col-12 col-md-2"><b style={{padding:"25px 0px", margin:'0px',fontSize:'20px', textShadow:'1px 1px gray'}}>Attachment : </b></div>
            <div className="col-12 col-md-10" style={{padding : '0px 25px'}}>
              <div className="row" style={{border:'1px solid gray',borderRadius:'5px'}}>
                <a href={server + obj.attachmentId} className="col-10 col-md-11" style={{padding:'5px 10px',textDecoration:'none', backgroundColor:'#dbd9d9'}} target="_blank">{obj.attachmentId.slice(7)}</a>
                <button type="submit" name="submit" className="btn btn-secondary col-2 col-md-1">&times;</button>
              </div>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-12 col-md-2"><b style={{padding:"25px 0px", margin:'0px',fontSize:'20px', textShadow:'1px 1px gray'}}>Feedback : </b></div>
            <div className="col-12 col-md-10" style={{fontSize:'20px'}}>
              {obj.feedback}
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3 offset-md-2">
              <button type="submit" name="submit" className="btn btn-primary btn-block">Unsubmit</button>
            </div>
          </div>
        </form>
      );
    }
    else{
      return(
        <form onSubmit={this.handleSubmit}>
          <div className ="form-group row">
            <label style={{padding:'2px', fontWeight:'bold', fontSize:'20px', textShadow:'1px 1px gray'}} id="file" className="col-12 col-md-2 form-label">Attachment : </label>
            <div className="col-12 col-md-10"><input type="file" style={{border:'1px solid #dedede',padding:'2px'}} className="form-control-file" name="attachment" id="file" onChange={this.onChange} required/></div>
          </div>
          <div className ="form-group row">
            <label style={{padding:'2px', fontWeight:'bold', fontSize:'20px', textShadow:'1px 1px gray'}} id="feedback" className="col-12 col-md-2 form-label">Feedback : </label>
            <div className="col-12 col-md-10"><input type="text" name="feedback" id="feedback" className="form-control" onChange={this.handleChange} required/></div>
          </div>
          <input type="hidden" name="taskType" value={taskType} />
          <input type="hidden" name="topic" value={topic} />
          <div className="row">
            <div className="col-12 col-md-3 offset-md-2">
              <button type="submit" name="submit" className="btn btn-primary btn-block">Submit</button>
            </div>
          </div>
        </form>
      );
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]:event.target.value});
  }

  onChange = event => {
    var file = event.target.files[0];
    this.setState({file:event.target.files[0]})
  }

  handleSubmit = (event) => {
    const headers={"Content-Type": "multipart/form-data","X-Access-Token":this.props.token}
    event.preventDefault();
    var formData = new FormData(event.target);
    axios.post(server+'/uploadtask?rollNo='+this.props.user,formData,{headers}).then(res=>console.log(res));
    setTimeout(() => {
      window.location.reload(false);
    }, 3000)
  }

  handleSubmitClear = (event) => {
    const headers={"Content-Type":"application/x-www-form-urlencoded","X-Access-Token":this.props.token}
    event.preventDefault();
    var formData = new FormData(event.target);
    axios.post(server+'/uploadtask?rollNo='+this.props.user+'&clear=true',formData,{headers}).then(res=>console.log(res));
    setTimeout(() => {
      window.location.reload(false);
    }, 3000)
  }

  render(){
    if(this.state.isLoading){
      return <Loading/>
    }

    return(
      <Accordion className="container">
        <center><h2>Tasks</h2></center>
      {
        this.state.task_data.map(task=>{
          return(
            <div className="row" style={{border:'1px solid #3f99d9',margin:'10px',borderRadius:'5px',boxShadow:'0px 0px 2px 2px #57ebe4'}}>
              <div className="col-12" style={{padding:'0px',margin:'0px'}}>
                <Accordion.Toggle as={Button} className="col-12" eventKey={task._id} style={{fontSize : '20px'}}>
                  <p style={{float:'left'}}><b style={{color:"black"}}>Topic : </b>{task.topic}</p>
                  <p style={{float:'right', padding: '10px 20px'}} className="badge badge-light">{task.taskType[0].toUpperCase() + task.taskType.slice(1)}</p>
                  <p style={{clear: 'both'}}/>
                  <p style={{float:'left'}}><b style={{color:"black"}}>Uploaded at : </b><span style={{color : "#1a4f0d"}}>{task.uploadTime}</span></p>
                  <p style={{float:'right'}}><b style={{color:'black'}}>Deadline : </b><span style={{color : "#87000b"}}>{task.deadline}</span></p>
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey={task._id} className="col-12" style={{padding:'10px',margin:'5px'}}>
                <div className="col-12">
                {this.checkAttachments(task.attachments,task.taskType,task.topic)}
                </div>
              </Accordion.Collapse>
            </div>
          );
        })
      }
      </Accordion>
    );

}
}

const taskContainerStyle = {

    fontFamily:"Helvetica",
    fontSize: '20px',
    margin:'10px',
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'row'
}

const taskStyle = {
  border:'1px solid gray',
  borderRadius:'5px',
  marginBottom:'20px',
  padding:'10px'
}

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
          <p>Attachment:<a href={server + obj.attachmentId} target="_blank">{obj.attachmentId}</a></p>
          <p>Feedback:{obj.feedback}</p>
          <input type="hidden" name="taskType" value={taskType} />
          <input type="hidden" name="topic" value={topic} />
          <input type="submit" name="submit" value="Clear"/>
        </form>
      );
    }
    else{
      return(
        <form onSubmit={this.handleSubmit}>
          <p>Attachment:<input type="file" name="attachment" onChange={this.onChange} required/></p>
          <p>Feedback:<input type="text" name="feedback" onChange={this.handleChange}/></p>
          <input type="hidden" name="taskType" value={taskType} />
          <input type="hidden" name="topic" value={topic} />
          <input type="submit" name="submit" value="Submit"/>
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
    axios.post(server+'/uploadtask?rollNo='+this.props.user,formData,{headers}).then(res=>console.log(res))
  }

  handleSubmitClear = (event) => {
    const headers={"Content-Type":"application/x-www-form-urlencoded","X-Access-Token":this.props.token}
    event.preventDefault();
    var formData = new FormData(event.target);
    axios.post(server+'/uploadtask?rollNo='+this.props.user+'&clear=true',formData,{headers}).then(res=>console.log(res))
  }

  render(){
    if(this.state.isLoading){
      return <Loading/>
    }

    return(
      <Accordion className="container">
      {
        this.state.task_data.map(task=>{
          return(
            <div className="row">
              <div className="col-12" style={{padding:'10px',margin:'5px'}}>
                <Accordion.Toggle as={Button} className="col-12" eventKey={task._id}>
                  <p>Topic:{task.topic}</p>
                  <p>{task.taskType}</p>
                  <p>Uploaded at {task.uploadTime}</p>
                  <p>Deadline:{task.deadline}</p>
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

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

  // checkAttachments = attachmentArray =>{
  //   var arr = [];
  //   attachmentArray.map(t=>{
  //     arr.push(t.rollNo);
  //   })
  //   var isThere = arr.filter(a => a == this.props.user);
  //
  //   if(isThere.length){
  //     return true;
  //   }
  //   return false;
  // }

  checkAttachments = (attachmentArray, taskType, topic) =>{

    var obj = attachmentArray.filter(task => task.rollNo === this.props.user);

    if(obj.length){
      var obj = obj[0];
      return(
        <form onSubmit={this.handleSubmitClear}>
          <p>Attachment:<a href={obj.attachmentId} target="_blank">{obj.attachmentId}</a></p>
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
    const headers={"Content-Type": "multipart/form-data","X-Access-Token":this.props.token}
    event.preventDefault();
    var formData = new FormData(event.target);
    axios.post(server+'/uploadtask?rollNo='+this.props.user+'&clear',formData,{headers}).then(res=>console.log(res))
  }

  render(){
    if(this.state.isLoading){
      return <Loading/>
    }

    return(
      <Accordion>
      {
        this.state.task_data.map(task=>{
          return(
            <Card style={{padding: "20px",
            textAlign: "left",
            marginBottom: "20px",
            border: "1px solid gray"}}>
              <Card.Header style={{textAlign:"center"}}>
                <Accordion.Toggle as={Button}  eventKey={task._id}>
                  <p>Topic:{task.topic}</p>
                  <p>{task.taskType}</p>
                  <p>Uploaded at {task.uploadTime}</p>
                  <p>Deadline:{task.deadline}</p>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={task._id}>
                <Card.Body>
                {this.checkAttachments(task.attachments,task.taskType,task.topic)}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
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

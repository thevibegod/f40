import React from 'react';
import {Col,Card,Button,Form,Accordion} from 'react-bootstrap';

import Loading from './Loading';
import axios from 'axios';
import server from '../../config/server';
const bson = require('bson');

export default class Tasks extends React.Component{

  state = {task_data:{},isLoading:true,file:null,feedback:'',fileName:'',topic:'',taskType:''}

  componentDidMount(){
    const headers = {
      "Content-Type": "application/json",
      "X-Access-Token": this.props.token
    };
    axios.get(server+'/alltasks',{headers}).then(res=>this.setState({task_data:res.data,isLoading:false}))
    //const data = {daily_task_topic:'Daily-Task',daily_task_attachment:null,daily_task_feedback:'Feedback',monthly_task_topic:'Monthly-Task',monthly_task_attachment:null,monthly_task_feedback:'Feedback',daily_graded:false,daily_task_score:0,monthly_task_score:80,monthly_graded:true}

  }

  checkAttachments = attachmentArray =>{
    attachmentArray.map(t=>{
      if(t.rollNo===this.props.user){
        return true
      }
      return false
    })
  }

  handleChange = event => {
    this.setState({[event.target.name]:event.target.value});
  }

   onChange=event=> {
  var file = event.target.files[0];
  this.setState({file:event.target.files[0]})
//  var fileNameArray =event.target.value.split("\\");
//  this.setState({fileName:fileNameArray[fileNameArray.length-1]})
//  var reader = new FileReader();
//  reader.onload = (event)=> {
    // The file's text will be printed here
  //  this.setState({file:event.target.result})
//  };

//  reader.readAsText(file);
}

handleSubmit=(event)=>{
  const headers={"Content-Type": "multipart/form-data","X-Access-Token":this.props.token}
  event.preventDefault();
  var formData = new FormData(event.target);
  console.log(formData)
  //formData.append('file',this.state.file)
//  formData.set('feedback',this.state.feedback)
//  formData.set('taskType',this.state.taskType)
  //formData.set('topic',this.state.topic)

  axios.post(server+'/uploadtask?rollNo='+this.props.user,formData,{headers}).then(res=>console.log(res))
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
                {this.checkAttachments(task.attachments)?
                  <form> //action={server+'/uploadtask?rollNo='+this.props.user+'&clear=true'} method="post">
                  <p>Attachment:<input type="file" name="file" /></p>
                  <p>Feedback:<input type="text" name="feedback" /></p>
                  <input type="submit" name="submit" onClick={this.handleSubmit}/>
                </form>
                  :
                  <form onSubmit={this.handleSubmit}>// action={server+'/uploadtask?rollNo='+this.props.user} method="POST">
                  <p>Attachment:<input type="file" name="attachment" onChange={this.onChange} /></p>
                  <p>Feedback:<input type="text" name="feedback" onChange={this.handleChange}/></p>
                  <input type="hidden" name="taskType" value={task.taskType} />
                  <input type="hidden" name="topic" value={task.topic} />
                  <input type="submit"/>
                </form>
                }
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

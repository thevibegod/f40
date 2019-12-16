import React from 'react';
import {Col,Card,Button,Form,Accordion} from 'react-bootstrap';

import Loading from './Loading';
import axios from 'axios';
import server from '../../config/server';

export default class Tasks extends React.Component{

  state = {task_data:{},isLoading:true}

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
      if(t.rollNo===this.props.rollNo){
        return true
      }
      return false
    })
  }

  handleChange = event => {
    this.setState({[event.target.name]:[event.target.value]});
  }


  handleSubmit = event => {
    console.log(this.state)
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
                  <form action={server+'/uploadtask?rollNo='+this.props.user+'&clear=true'} method="post">
                  <p>Attachment:<input type="file" name="file" /></p>
                  <p>Feedback:<input type="text" name="feedback" /></p>
                  <input type="submit" name="submit" value="clear"/>
                </form>
                  :
                  <form action={server+'/uploadtask?rollNo='+this.props.user} method="post">
                  <p>Attachment:<input type="file" name="file" /></p>
                  <p>Feedback:<input type="text" name="feedback" /></p>
                  <input type="submit" name="submit"/>
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

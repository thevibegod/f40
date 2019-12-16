import React from 'react';
import {Col,Card,Button,Form} from 'react-bootstrap';

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

  handleChange = event => {
    this.setState({[event.target.name]:[event.target.value]});
  }


  handleSubmit = event => {
    console.log(this.state)
  }
  render(){
    if(isLoading){
      return <Loading/>
    }

    return(
      <div>
        {task_data.map((task)=>{
          let task_present=false;
          task.attachments.map(t){
            if(t.rollNo===this.props.user){
              task_present=true;
            }
          }
          (<div>
            <p>Task Topic:{task.topic}</p>
            <p>Task Type:{task.type}</p>
            <form action={server+'/uploadtask?rollNo='+this.props.user} method="POST">
            <p>Feedback:</p><input type="text" name="feedback" placeholder={{task_present?task.attachments.feedback:''}}></input>
            <p>Attachment:</p><input type="file" name="attachment" placeholder={{task_present?task.attachments.attachmentId:null}}></input>
            <input type="submit" disabled={task_present}/>
            </form>
            </div>
          );
        }
        )}
      </div>
    )

//     return(<div>
//   <center><h1>Tasks</h1></center>
//   <div style={taskContainerStyle}>
//   <Col style={{ justifyContent: "center" }}>
//   <Card style={taskStyle}>
//   <Form>
//   <center><b><p>Daily Task</p></b></center>
//   <p>Topic:{this.state.task_data.daily_task_topic}</p>
//   <div>
//   <div style={{justifyContent:'center',display:'flex',flexDirection:'row'}}>
//   <div style={{justifyContent:'center',display:'flex',flexDirection:'column'}}>
//   <p>Attachment</p><input type="file" name="da" onChange={this.handleChange} value={this.state.daily_task_attachment}/>
//   </div>
//   <div style={{justifyContent:'center',display:'flex',flexDirection:'column'}}>
//   <p>Feedback</p><input type="text" name="df" onChange={this.handleChange} value={this.state.daily_task_feedback}/>
//   <Button onClick={this.handleSubmit}  value="Submit" style={{alignSelf:'center',marginTop:'5px'}}>Submit</Button>
//   {this.state.task_data.daily_graded?<p>You scored {this.state.task_data.daily_task_score}} out of 100</p>:<p>Your submission is not graded yet.</p>}
//   </div>
//   </div>
//   <div>
//   </div>
//   </div>
//   </Form>
//   </Card>
//
//     <Card style={taskStyle}>
//       <center><b><p>Monthly Task</p></b></center>
//       <p>Topic:{this.state.task_data.monthly_task_topic}</p>
//       <div>
//         <div style={{justifyContent:'center',display:'flex',flexDirection:'row'}}>
//           <div style={{justifyContent:'center',display:'flex',flexDirection:'column'}}>
//             <p>Attachment</p><input type="file" name="ma" onChange={this.handleChange} value={this.state.monthly_task_attachment}/>
//           </div>
//           <div style={{justifyContent:'center',display:'flex',flexDirection:'column'}}>
//             <p>Feedback</p><input type="text" name="mf" onChange={this.handleChange} value={this.state.monthly_task_feedback}/>
//             <Button onClick={this.handleSubmit}  value="Submit" style={{alignSelf:'center',marginTop:'5px'}}>Submit</Button>
//             {this.state.task_data.monthly_graded?<p>You scored {this.state.task_data.monthly_task_score} out of 100</p>:<p>Your submission is not graded yet.</p>}
//           </div>
//         </div>
//       <div>
//       </div>
//   </div>
// </Card>
// </Col>
// </div>
// </div>
//
// );
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

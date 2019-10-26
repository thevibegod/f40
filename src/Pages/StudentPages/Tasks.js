import React from 'react';

export default class Tasks extends React.Component{

  state = {task_data:{}}

  componentDidMount(){
    const data = {daily_task_topic:'Daily-Task',daily_task_attachment:null,daily_task_feedback:'Feedback',monthly_task_topic:'Monthly-Task',monthly_task_attachment:null,monthly_task_feedback:'Feedback'}
    this.setState({task_data:data})
  }

  handleChange = event => {
    this.setState({[event.target.name]:[event.target.value]});
  }


  handleSubmit = event => {
    console.log(this.state)
  }
  render(){

    return(
      <div><center><h1>Tasks</h1></center>
  <div style={taskContainerStyle}>

  <div style={taskStyle}>
  <center><b><p>Daily Task</p></b></center>
  <p>Topic:{this.state.task_data.daily_task_topic}</p>
  <div>
  <div style={{justifyContent:'center',display:'flex',flexDirection:'row'}}>
  <div style={{justifyContent:'center',display:'flex',flexDirection:'column'}}>
  <p>Attachment</p><input type="file" name="da" onChange={this.handleChange} value={this.state.daily_task_attachment}/>
  </div>
  <div style={{justifyContent:'center',display:'flex',flexDirection:'column'}}>
  <p>Feedback</p><input type="text" name="df" onChange={this.handleChange} value={this.state.daily_task_feedback}/>
  <input type="button" onClick={this.handleSubmit}  value="Submit" style={{width:"60px",alignSelf:'center',marginTop:'5px'}}/>
  </div>
  </div>
  <div>
  </div>
  </div>
  </div>

    <div style={taskStyle}>
      <center><b><p>Monthly Task</p></b></center>
      <p>Topic:{this.state.task_data.monthly_task_topic}</p>
      <div>
        <div style={{justifyContent:'center',display:'flex',flexDirection:'row'}}>
          <div style={{justifyContent:'center',display:'flex',flexDirection:'column'}}>
            <p>Attachment</p><input type="file" name="ma" onChange={this.handleChange} value={this.state.monthly_task_attachment}/>
          </div>
          <div style={{justifyContent:'center',display:'flex',flexDirection:'column'}}>
            <p>Feedback</p><input type="text" name="mf" onChange={this.handleChange} value={this.state.monthly_task_feedback}/>
            <input type="button" onClick={this.handleSubmit}  value="Submit" style={{width:"60px",alignSelf:'center',marginTop:'5px'}}/>
          </div>
        </div>
      <div>
      </div>
  </div>
</div>
</div>
</div>

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

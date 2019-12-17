import React from 'react';
import axios from 'axios';
import server from '../../config/server'
export default class View extends React.Component {
  constructor(props){
    super(props);
  }


func = ()=>{
  const headers = {
    "X-Access-Token": this.props.token,
  }
  axios({url:server+'/attachment?rollNo=18BEC070&topic=Mon%20Task',method:'GET',headers:{headers}}).then((res)=>{
    const file= new Blob([res.data],{type:'application/pdf'});
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL)
  }
  )
}

  render(){
    return <p onClick={this.func}>Hi</p>
  }
}

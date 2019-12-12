import React, { useEffect, useState } from "react";
import InfoItem from "./InfoItem.js";
import axios from 'axios';
import { Row } from "react-bootstrap";
export default class Events extends React.Component{
  constructor(props) {
  super(props);
  this.state={data:[],loading:true}
}
  componentDidMount=()=> {
    let dataMap =[];
    const headers = {
      'Content-Type':'application/json',
      'X-Access-Token':this.props.token
    }

    //fetch operation
    axios.get('https://cors-anywhere.herokuapp.com/f40-server.adarshfrompupil.now.sh/getallevents',{headers}).then(res=>{
       res.data.map((value)=>{
        return fetch(`https://cors-anywhere.herokuapp.com/f40-server.adarshfrompupil.now.sh/eventpicture?title=${value.title}`,{headers}).then(
          (res)=>{return res.blob()}).then((blob)=>{dataMap.push({uid:value.id,title:value.title,desc:value.desc,imgURL:URL.createObjectURL(blob)})}
      )
      })
    }

  ).then(()=>this.setState({data:dataMap,loading:false})).catch(err=>console.log(err))

  }
render(){
  if(this.state.loading){
  return (<p>Loading</p>);
}else {
  return(
    <div className="container">
      <center><h1>Events</h1></center>
      {console.log('hi')}
      <Row style={{ justifyContent: "center" }}>
        {this.state.data.map(item => {
          console.log(item)
          return <InfoItem item={item} key={item.uid} />;
        })}
      </Row>
    </div>
  );
}

}
}

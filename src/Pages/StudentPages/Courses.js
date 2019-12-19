import React, { useState, useEffect } from "react";
import { Accordion,Card,Button } from "react-bootstrap";
import Loading from './Loading';
import axios from 'axios';
import server from '../../config/server';

export default function Courses({token}) {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    //fetch operation

    const headers = {
      'Content-Type':'application/json',
      'X-Access-Token':token
    }

    axios.get(server+'/getallcourses',{headers}).then(res=>{
      console.log(res.data)
      setData(res.data);
      setLoading(false);
    })


  }, []);

if(loading){
  return<div>
  <center><h1>Courses</h1></center>
  <Loading/></div>
}
  return (
    <div className="container">
      <center><h1>Courses</h1></center>
      <div>
        <center>
          <h2>Here are some courses recommended for you</h2>
        </center>
        <Accordion className= "container">
          {data.map(item => {
            return (
              <div className ="row" style={{border:'1px solid #3f99d9',margin:'10px',borderRadius:'5px',boxShadow:'0px 0px 2px 2px #57ebe4'}}>
                <div className="col-12" style={{padding:'0px',margin:'0px'}}>
                  <Accordion.Toggle as={Button} eventKey={item._id} className="col-12" style={{fontSize : '20px', padding:'15px'}}>
                    <p style={{float : 'left'}}>{item.title}</p>
                    <p className="badge badge-success" style={{float : 'right', fontSize : '20px', padding : '10px 20px', backgroundColor : '#34e02b'}}>{item.price}</p>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey={item._id} className="col-12" style={{padding:'10px',margin:'5px'}}>
                  <div className="col-12">
                    <p style={{textAlign : 'justify', padding:'2px', fontWeight:'bold', fontSize:'25px'}}>Description : </p>
                    <p>{item.desc}</p>
                    <p style={{padding:'2px', fontWeight:'bold', fontSize:'25px'}}>Financial Aid available :  {item.financialaid === 'Yes' ? <span style={{color : 'green'}}>Yes</span> : (item.financialaid === 'No' ? <span style={{color : 'red'}}>No</span> : <span style={{color : '#deed05'}}>Not Required</span> ) } </p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{backgroundColor : '#99087c', color:'white', fontSize : '20px'}} className="btn btn-block">Go to Course</a>
                  </div>
                </Accordion.Collapse>
              </div>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}

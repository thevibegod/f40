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
        <Accordion>
          {data.map(item => {
            return (
              <Card style={{padding: "20px",
              textAlign: "left",
              marginBottom: "20px",
              border: "1px solid gray"}}>
                <Card.Header style={{textAlign:"center"}}>
                  <Accordion.Toggle as={Button} variant="link" eventKey={item._id}>
                    <p>{item.title}</p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={item._id}>
                  <Card.Body>
                    <p>Description:{item.desc}</p>
                    <p>Price:{item.price}</p>
                    <p>Financial Aid available:{item.financialaid}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">Go to Course</a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}

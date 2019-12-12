import React, { useState, useEffect } from "react";
import { Accordion,Card,Button } from "react-bootstrap";
export default function Courses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //fetch operation

    setData([
      {
        uid: 0,
        title: "Python for Everybody-Coursera",
        link: "https://www.coursera.org/specializations/python"
      },
      {
        uid: 1,
        title: "Tech Explorations™ Arduino Step by Step Getting Serious-Udemy",
        link: "https://www.udemy.com/course/arduino-sbs-getting-serious/"
      },
      {
        uid: 2,
        title: "Java Programming Masterclass for Software Developers-Udemy",
        link:
          "https://www.udemy.com/course/java-the-complete-java-developer-course/"
      },
      {
        uid: 3,
        title: "Applied Data Science with Python Specialization-Coursera",
        link: "https://www.coursera.org/specializations/data-science-python"
      },
      {
        uid: 4,
        title: "Hello (Real) World with ROS – Robot Operating System-edx",
        link:
          "https://courses.edx.org/courses/course-v1:DelftX+ROS1x+3T2018/course/"
      }
    ]);
  }, []);

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
                  <Accordion.Toggle as={Button} variant="link" eventKey={item.uid}>
                    <p>{item.title}</p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={item.uid}>
                  <Card.Body>
                    <p>Description:{item.desc}</p>
                    <p>Price:{item.price}</p>
                    <p>Financial Aid available:{item.financialaid}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">Click here</a>
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

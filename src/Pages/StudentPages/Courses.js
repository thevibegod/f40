import React,{useState,useEffect} from 'react';

export default function Courses(){

  const [data,setData] = useState([]);

  useEffect(() => {
    //fetch operation

    setData([{uid:0,title:'Python for Everybody-Coursera',link:'https://www.coursera.org/specializations/python'},{uid:1,title:'Tech Explorations™ Arduino Step by Step Getting Serious-Udemy',link:'https://www.udemy.com/course/arduino-sbs-getting-serious/'},{uid:2,title:'Java Programming Masterclass for Software Developers-Udemy',link:'https://www.udemy.com/course/java-the-complete-java-developer-course/'},{uid:3,title:'Applied Data Science with Python Specialization-Coursera',link:'https://www.coursera.org/specializations/data-science-python'},{uid:4,title:'Hello (Real) World with ROS – Robot Operating System-edx',link:'https://courses.edx.org/courses/course-v1:DelftX+ROS1x+3T2018/course/'}]);
  },[]);

  return(
    <div style={courseContainerStyle}>
      <h1>Courses</h1>
      <div>
        <center><h2>Here are some courses recommended for you</h2></center>
        <div>
          <ol style={{listStyleType:'none'}}>
            {data.map((item) => {
              return <li style={listItemStyles}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></li>
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

const courseContainerStyle = {

    fontFamily:"Helvetica",
    fontSize: '20px'
}



const listItemStyles = {
  padding:'20px',
  textAlign:'center',
  marginBottom:'20px',
  border:'1px solid gray',
  borderRadius:'5px',
  marginRight:'50px',

}

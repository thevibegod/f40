import React,{useState,useEffect} from 'react';

export default function Courses(){

  const [data,setData] = useState([]);
  const [tempName,setTempName] = useState('');
  const [tempLink,setTempLink] = useState('');


  useEffect(() => {
    //fetch operation

    setData([{title:'Python for Everybody-Coursera',link:'https://www.coursera.org/specializations/python'},{title:'Tech Explorations™ Arduino Step by Step Getting Serious-Udemy',link:'https://www.udemy.com/course/arduino-sbs-getting-serious/'},{title:'Java Programming Masterclass for Software Developers-Udemy',link:'https://www.udemy.com/course/java-the-complete-java-developer-course/'},{title:'Applied Data Science with Python Specialization-Coursera',link:'https://www.coursera.org/specializations/data-science-python'},{title:'Hello (Real) World with ROS – Robot Operating System-edx',link:'https://courses.edx.org/courses/course-v1:DelftX+ROS1x+3T2018/course/'}]);
  },[]);


  const handleChange=(event) => {
    event.target.name==='courseName'?setTempName(event.target.value):setTempLink(event.target.value)
  }

  const handleSubmit=()=>{
    if(tempLink!=''&&tempName!=''){
      setData(data.concat({title:tempName,link:tempLink}));
            console.log(data);
    }

    //UPDATE Request here
  }

  const handleRemove=(index)=>{

    let newData=[];
    for(let i=0;i<data.length;i++){
      if(i!=index)
      newData = newData.concat(data[i]);
    }
    setData(newData);

    //UPDATE Request here
  }

  return(
    <div style={courseContainerStyle}>
      <h1>Courses</h1>
      <div>
        <center><div>
                    <h2>Add Courses</h2>
                    <div>
                      <p>Course Name: </p><input name='courseName' onChange={handleChange} value={tempName}></input>
                      <p>Course Link: </p><input name='courseLink' onChange={handleChange} value={tempLink}></input>
                      <button onClick={handleSubmit}>Add</button>
                    </div>
                </div></center>
        <div>
          <ol style={{listStyleType:'none'}}>
            {data.map((item,index) => {
              return <li style={listItemStyles}><a href={item.link} target="_blank">{item.title}</a><button onClick={()=>handleRemove(index)}>X</button></li>
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

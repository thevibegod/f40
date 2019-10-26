import React,{useState,useEffect} from "react";

export default function Assessments(){

      const [links,setLinks] = useState([]);

      useEffect(() => {
        {
          //Fetch operation
          const val = ["https://www.google.co.in","https://www.google.co.in"];
          setLinks(val);
        }
      },[]);

      return(
        <div style={assessmentContainerStyle}>
        <center>
          <div><h1>Assessments</h1></div>
          <div><p>To attend Daily assessment, <a href={links[0]} target="_blank">click here</a></p></div>
          <div><p>To attend Monthly assessment, <a href={links[1]} target="_blank">click here</a></p></div>
        </center>
        </div>
      );
}

const assessmentContainerStyle = {

    fontFamily:"Helvetica",
    fontSize: '20px'
}

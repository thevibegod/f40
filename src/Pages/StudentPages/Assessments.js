import React,{useState,useEffect} from "react";
import Loading from './Loading';
import axios from "axios";
import server from '../../config/server';

export default function Assessments({token}){

      const [data,setData] = useState([]);
      const [isLoading,setIsLoading] = useState(true);

      useEffect(() => {
        {
          const headers = {
            "Content-Type": "application/json",
            "X-Access-Token": token
          };
          axios.get(server+'/allassessments',{headers}).then(res=>{setData(res.data);setIsLoading(false);})
        }
      },[]);

    if(isLoading){
      return <Loading/>
    }

      return(
        <div style={assessmentContainerStyle}>
        <center>
          <h1>Assessments</h1>
          <div>
          {
            data.map(val=>
                   <div>
                      <p><b>Assessment Type:</b>{val.assessmentType}</p>
                      <p><b>Topic:</b>{val.topic}</p>
                      <p><b>Link:</b><a href={val.link}>{val.link}</a></p>
                   </div>
            )
          }
        </div>
        </center>
        </div>
      );
}

const assessmentContainerStyle = {

    fontFamily:"Helvetica",
    fontSize: '20px'
}

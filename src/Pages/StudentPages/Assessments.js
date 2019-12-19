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
        <div className="container" style={assessmentContainerStyle}>
        <div className="row">
          <div className="col-12 text-center">
            <h1>Assessments</h1>
          </div>
        </div>
        <div className="row">
          {
            data.map(val=>
             <div className="col-12" style={{backgroundColor: '#d2d3d4' ,border:'1px solid blue',padding :'10px', borderRadius : '10px', margin : '5px'}}>
               <p style={{float:'left'}}><b style={{padding:'2px', fontSize:'20px', textShadow:'1px 1px gray'}}>Topic:</b>{val.topic}</p>
               <p style={{float:'right', padding:'10px 20px', fontSize:'17px', borderRadius : '5px'}} className="badge badge-info">{val.assessmentType[0].toUpperCase() + val.assessmentType.slice(1)}</p>
               <p  style={{clear:'both'}}/>
               <p className="text-center"><b>Link:</b><a href={val.link}>{val.link}</a></p>
             </div>
            )
          }
        </div>
      </div>
      );
}

const assessmentContainerStyle = {

    fontFamily:"Helvetica",
    fontSize: '20px'
}

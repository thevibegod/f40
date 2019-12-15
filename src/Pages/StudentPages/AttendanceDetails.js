import React,{useState,useEffect} from "react";
import {Table} from 'react-bootstrap';
import Loading from './Loading';
import axios from "axios";
import server from '../../config/server';

export default function AttendanceDetails({user,token}){

      const [attendanceData,setAttendanceData] = useState([]);
      const [isLoading,setIsLoading] = useState(true);


      useEffect(() => {
        const headers = {
          "Content-Type": "application/json",
          "X-Access-Token": token
        };
          //GET request here from props.student
          axios.get(server+`/studentattendance?rollNo=${user}`,{headers}).then((res)=>{
            setAttendanceData(res.data.dates);
            setIsLoading(false);
          })

          //const val = [{date:'16/10/2019',data:'A'},{date:'17/10/2019',data:'A'},{date:'18/10/2019',data:'A'},{date:'19/10/2019',data:'P'},{date:'20/10/2019',data:'P'},{date:'21/01/2019',data:'P'},{date:'31/01/2019',data:'P'},{date:'12/02/2019',data:'P'},{date:'28/02/2019',data:'P'},{date:'01/03/2019',data:'P'}];
          //setAttendanceData(val);
      },[]);
if(isLoading){
  return <Loading/>;
}else{
      return(
        <div style={assessmentContainerStyle}>
        <center>
          <div><h1>Attendance</h1></div>
          <Table size bordered>
            <thead>
            <tr>
              <th>Date</th>
              <th>Present/Absent</th>
              </tr>
            </thead><tbody>{
            attendanceData.map((data) => {
              if(data.value){
                return(<tr style={{backgroundColor:'rgba(0,255,0,0.2)'}}><td>{data.date}</td><td>P</td></tr>);
              }
                return(<tr style={{backgroundColor:'rgba(255,0,0,0.2)'}}><td>{data.date}</td><td>A</td></tr>);
          })}</tbody>
          </Table>
          </center>
        </div>
      );
}
}
const assessmentContainerStyle = {
    fontFamily:"Helvetica",
    fontSize: '20px'
}

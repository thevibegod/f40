import React,{useState,useEffect} from "react";
import {Table} from 'react-bootstrap';

export default function AttendanceDetails(){

      const [attendanceData,setAttendanceData] = useState([]);


      useEffect(() => {
        {
          //GET request here from props.student

          const val = [{date:'16/10/2019',data:'A'},{date:'17/10/2019',data:'A'},{date:'18/10/2019',data:'A'},{date:'19/10/2019',data:'P'},{date:'20/10/2019',data:'P'},{date:'21/01/2019',data:'P'},{date:'31/01/2019',data:'P'},{date:'12/02/2019',data:'P'},{date:'28/02/2019',data:'P'},{date:'01/03/2019',data:'P'}];
          setAttendanceData(val);
}
      },[]);

      return(
        <div style={assessmentContainerStyle}>
        <center>
          <div><h1>Attendance</h1></div>
          <Table size bordered>
            <thead>
              <th>Date</th>
              <th>Present/Absent</th>
            </thead><tbody>{
            attendanceData.map((data) => {
              if(data.data==='P'){
                return(<tr style={{backgroundColor:'rgba(0,255,0,0.2)'}}><td>{data.date}</td><td>{data.data}</td></tr>);
              }
                return(<tr style={{backgroundColor:'rgba(255,0,0,0.2)'}}><td>{data.date}</td><td>{data.data}</td></tr>);
          })}</tbody>
          </Table>
          </center>
        </div>
      );
}

const assessmentContainerStyle = {
    fontFamily:"Helvetica",
    fontSize: '20px'
}

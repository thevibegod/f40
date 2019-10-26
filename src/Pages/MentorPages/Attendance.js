import React,{useState,useEffect} from "react";
import AttendanceDetails from './AttendanceDetails.js';

export default function Attendance(){

      const [attendanceObjectList,setaAttendanceObjectList] = useState([[]]);
      const [selectValue,setSelectValue] = useState(null);


      useEffect(() => {
        {
          //GET request here
          setaAttendanceObjectList([{rollNo:'18BEC095',name:'Adarsh',attendance:100},{rollNo:'18BEC076',name:'Karthik',attendance:80}]);
        }
      },[]);


      const handleClick=((index) => {
        setSelectValue(attendanceObjectList[index].rollNo);
      })


       if(selectValue===null){
          return(
            <div style={assessmentContainerStyle}>
            <center>
              <div><h1>Attendance</h1></div>
              <div>
                {attendanceObjectList.map((item,index) => {
                  return <div>
                            <p><b>Name:</b>{item.name}</p>
                            <p><b>Roll No:</b>{item.rollNo}</p>
                            <p><b>Attendance:</b>{item.attendance}</p>
                            <button onClick={()=>handleClick(index)}>More Details</button>
                        </div>
                })}
              </div>
            </center>
            </div>
    );}

   else{
        return(
          <AttendanceDetails student={selectValue}/>
        )
      }

}

const assessmentContainerStyle = {

    fontFamily:"Helvetica",
    fontSize: '20px'
}

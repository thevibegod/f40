import React,{useState,useEffect} from "react";

export default function AttendanceDetails(){

      const [attendanceData,setAttendanceData] = useState([]);
      const [fv,setFv] = useState('');
      const [lv,setLv] = useState('');
      var displayDataArray = [];

      const getDisplayData = (date)=>{
        const displayYear=date.slice(6,10);
        const displayMonth=getMonth(date);
        return displayMonth+' '+displayYear;
      }


      const getMonth = (date) => {
        if(date.slice(3,5)==='01'){
          return 'January';
        }
        else if(date.slice(3,5)==='02'){
          return 'February';
        }else if(date.slice(3,5)==='03'){
          return 'March';
        }else if(date.slice(3,5)==='04'){
          return 'April';
        }else if(date.slice(3,5)==='05'){
          return 'May';
        }else if(date.slice(3,5)==='06'){
          return 'June';
        }else if(date.slice(3,5)==='07'){
          return 'July';
        }else if(date.slice(3,5)==='08'){
          return 'August';
        }else if(date.slice(3,5)==='09'){
          return 'September';
        }else if(date.slice(3,5)==='10'){
          return 'October';
        }else if(date.slice(3,5)==='11'){
          return 'November';
        }else if(date.slice(3,5)==='12'){
          return 'December';
        }else{
          return null;
        }
      }

      useEffect(() => {
        {
          //GET request here from props.student

          const val = [{date:'16/10/2019',data:'P'},{date:'16/10/2019',data:'P'},{date:'17/10/2019',data:'A'},{date:'18/10/2019',data:'A'},{date:'19/10/2019',data:'P'},{date:'20/10/2019',data:'P'},{date:'21/01/2019',data:'P'}];
          setAttendanceData(val);
          setFv(val[0].date);
          setLv(val[val.length-1].date);

          for(let i=0;i<val.length;i++){
            const date = getDisplayData(val[i].date);

            if(displayDataArray.indexOf(date)===-1){
              const tempData = displayDataArray;
              displayDataArray.push(date);


            }
          }
        }
      },[]);

      console.log(displayDataArray);

      return(
        <div style={assessmentContainerStyle}>
          <div><h1>Attendance</h1></div>


        </div>
      );
}

const assessmentContainerStyle = {

    fontFamily:"Helvetica",
    fontSize: '20px'
}

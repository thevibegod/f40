import React,{useEffect,useState} from 'react';
import InfoItem from './InfoItem.js';

export default function Notifications(){

  const [data,setData] = useState([]);

  useEffect(() => {
    //fetch operation

      setData([{uid:0,title:'Internal Examinations',desc:'The Second Internal Examinations will be held starting from 18th October.'},{uid:1,title:'Engineering Clinics Hackathon',desc:'The Hackathon for Engineering Clinics for second years will be held on 11/11/19.'},{uid:2,title:'Semester Examinations',desc:'The End Semester Examinations for second years will be held starting from 18/11/19 to 27/11/19'}]);
  },[]);


  return(
    <div style={notificationContainerStyle}>
      <center><h1>Notifications</h1></center>
      <div>
        {data.map((item) => {
          return <InfoItem item={item} key={item.uid}/>
        })}
      </div>
    </div>
  )
}


const notificationContainerStyle = {

    fontFamily:"Helvetica",
    fontSize: '20px'
}

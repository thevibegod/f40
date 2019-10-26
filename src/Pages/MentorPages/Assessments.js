import React,{useState,useEffect} from "react";

export default function Assessments(){

      const [dailyLink,setDailyLink] = useState('');
      const [monthlyLink,setMonthlyLink] = useState('');

      useEffect(() => {
        {
          //GET request here
          const val = ["https://www.google.co.in","https://www.google.co.in"];
          setDailyLink(val[0]);
          setMonthlyLink(val[1]);
        }
      },[]);


      const handleChange=(event) => {
        event.target.name==="daily"?setDailyLink(event.target.value):setMonthlyLink(event.target.value);
      }

      const pushChange=()=>{
        //POST request here
        console.log(dailyLink,monthlyLink);
      }
      return(
        <div style={assessmentContainerStyle}>
        <center>
          <div><h1>Assessments</h1></div>
          <div><p>Daily assessment Link: <a href={dailyLink} target="_blank">click here</a></p>
              <input value={dailyLink} onChange={handleChange} name="daily" />
              <button onClick={pushChange}>Ok</button>
          </div>

          <div><p>Monthly assessment Link: <a href={monthlyLink} target="_blank">click here</a></p>
              <input value={monthlyLink} onChange={handleChange} name="monthly" />
              <button onClick={pushChange}>Ok</button>
          </div>


        </center>
        </div>
      );
}

const assessmentContainerStyle = {

    fontFamily:"Helvetica",
    fontSize: '20px'
}

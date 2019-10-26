import React,{useState} from 'react';
import RenderStudentLogin from './Pages/StudentPages/RenderStudentLogin';
import RenderMentorLogin from './Pages/MentorPages/RenderMentorLogin';


function App(){
  const [pageSetter,setPageSetter] = useState('student')

  if(pageSetter==='student'){
return(<div>
  <RenderStudentLogin pageSetter={setPageSetter}/>
  </div>
)}
else{
  return(<div>
    <RenderMentorLogin pageSetter={setPageSetter}/>
    </div>)
}
}
export default App;

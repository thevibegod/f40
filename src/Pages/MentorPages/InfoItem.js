import React from 'react';

export default function InfoItem({item}){

  if(item.imgURL){
  return(
    <div style={infoBoxStyle}>
      <h2 style={{textAlign:'center'}}>{item.title}</h2>
  <p style={{textAlign:'center'}}> {item.desc}</p>
      <center><img src={item.imgURL} alt="no-img" width="400px" height="250px"/></center>
    </div>
  )}
  else{
    return(
      <div style={infoBoxStyle}>
        <h2 style={{textAlign:'center'}}>{item.title}</h2>
        <marquee scrollamount="10"><p> {item.desc}</p></marquee>
      </div>
    )
  }
}


const infoBoxStyle = {
    marginTop:'10px',
    marginLeft:'5px',
    marginRight:'5px',
    border : '1px solid gray',
    borderRadius : '5px',
}

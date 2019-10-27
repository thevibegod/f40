import React from "react";

export default function InfoItem({ item }) {
  if (item.imgURL) {
    return (
      <div className="card shadow-sm p-3 m-2" style={{ width: 450 }}>
        <img
          className="card-img-top"
          style={{ width: 400, height: 250 }}
          src={item.imgURL}
          alt="no-img"
          width="400px"
          height="250px"
        />
        <div clasName="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="card-text"> {item.desc}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <marquee scrollamount="10">
            <p className="card-text"> {item.desc}</p>
          </marquee>
        </div>
      </div>
    );
  }
}

import React, { useEffect, useState } from "react";
import InfoItem from "./InfoItem.js";

export default function Events() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //fetch operation

    setData([
      {
        uid: 0,
        title: "Voice Out",
        desc:
          "The department of ECE conducted the Voice Out Event two weeks ago as a part of the rolling trophy event.",
        imgURL:
          "https://images.shiksha.com/mediadata/images/1542693267phpkzuGz2_g.png"
      },
      {
        uid: 1,
        title: "Webinar on IOT and ML",
        desc:
          "A webinar on Internet of Things and Machine Learning was conducted yesterday.",
        imgURL: "https://miro.medium.com/max/1200/1*tX8uEi_s9Hx_MG_Dq9AsHw.png"
      },
      {
        uid: 2,
        title: "High Street Talk",
        desc:
          "As a part of the department Rolling Trophy event, a HIGH STREET TALK about Routers will take place next week.",
        imgURL:
          "https://images.shiksha.com/mediadata/images/1542693267phpkzuGz2_g.png"
      },
      {
        uid: 3,
        title: "Musings of ECE",
        desc: "Article written by department students every Friday.",
        imgURL:
          "https://assets.website-files.com/591b376c21801e4a8d011139/591b376c21801e4a8d01115f_Moxie-Musings-Logo-2-min.png"
      }
    ]);
  }, []);

  return (
    <div className="container">
      <h1>Events</h1>
      <div className="row justify-content-center">
        {data.map(item => {
          return <InfoItem item={item} key={item.uid} />;
        })}
      </div>
    </div>
  );
}

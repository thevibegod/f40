import React from "react";
import { Card } from "react-bootstrap";
export default function InfoItem({ item }) {
  if (item.imgURL) {
    return (
      <Card style={{ width: 450, margin: 10 }}>
        <Card.Img
          variant="top"
          src={item.imgURL}
          alt="no-img"
          width="400px"
          height="250px"
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text> {item.desc}</Card.Text>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <marquee scrollamount="10">
            <Card.Text> {item.desc}</Card.Text>
          </marquee>
        </Card.Body>
      </Card>
    );
  }
}

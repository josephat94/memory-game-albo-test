import React from "react";
import { Card } from "react-bootstrap";

const GenreCard = (props) => {
  return (
    <Card onClick={()=>{props.onCardClick(props.id)}} className="onHover anima-bounce-in " style={{ width: "15%",margin:"2rem", height: "10rem", border:"1px solid #efefef", cursor:"pointer" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GenreCard;

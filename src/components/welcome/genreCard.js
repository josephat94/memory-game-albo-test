import React from "react";
import { Card } from "react-bootstrap";

const GenreCard = (props) => {
  return (
    <Card onClick={()=>{props.onCardClick(props.id)}} className=" anima-bounce-in " style={{ width: "14%",margin:"1rem", height: "10rem", border:"1px solid #efefef", cursor:"pointer" }}>
      <Card.Body className=" onHover w-100 h-100 d-flex align-items-center justify-content-center"> 
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GenreCard;

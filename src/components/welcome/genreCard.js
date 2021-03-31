import React from "react";
import { Card, Col } from "react-bootstrap";

const GenreCard = (props) => {
  return (
   <Col xs={12} sm={12} md={4} lg={2}> 
      <Card onClick={()=>{props.onCardClick(props.id)}} className=" anima-bounce-in " style={{margin:"1rem", height: "10rem", border:"1px solid #efefef", cursor:"pointer" }}>
      <Card.Body className=" onHover w-100 h-100 d-flex align-items-center justify-content-center"> 
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
   </Col>

  );
};

export default GenreCard;

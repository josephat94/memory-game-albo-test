import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import Flipcard from "@kennethormandy/react-flipcard";
import cardImage from './card.png'
const MovieCard = (props) => {
    const {id, isFlipped, onClickCard, index,found, poster}= props;
  
  return (
      <Col xs={6} md={3} lg={2} xl={1}>

<div
    className={found?"found onHover card-game":"onHover card-game"}
   
 
    >
      <Flipcard
      className="w-100 h-100"
      flipped={isFlipped}>
        <Card
        className="movie-card"
          onClick={() => {
            onClickCard(index)
            //  props.onCardClick(props.id);
          }}
          className=" anima-bounce-in special-card w-100 h-100 "
        >
          <Card.Body className="p-0 w-100 h-100 bg-primary" style={{overflow: 'hidden'}}>
          <img className="h-100 w-100" src={cardImage}></img>
          </Card.Body>
        </Card>

        <Card
          onClick={() => {
              if(found==false){
                onClickCard(index)
              }
           
            //  props.onCardClick(props.id);
          }}
          className="onHover anima-bounce-in special-card  "
          className="movie-card"
        >
          <Card.Body className="p-0" style={{overflow: 'hidden'}}>
            <img className="h-100 w-100" src={`https://image.tmdb.org/t/p/w185${props.poster}`}></img>
          </Card.Body>
        </Card>
      </Flipcard>
    </div>

      </Col>
  
  );
};

export default MovieCard;

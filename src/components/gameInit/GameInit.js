import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { flipCard, reset, selectAllFound, selectCard1, selectCard2, selectMovies } from "../../reducers/main";
import MemoryFinished from "../memoryFinished/MemoryFinished";
import MovieCard from "./Card";
const GameInit = (props) => {
  const movies = useSelector(selectMovies);
  const card1Selected= useSelector(selectCard1)
  const card2Selected= useSelector(selectCard2)
  const allFound= useSelector(selectAllFound);
const dispatch= useDispatch();

  const onClickCard=(id)=>{

    dispatch(flipCard(id));
  }
  const onReset=()=>{
      dispatch(reset())
  }
  return (
    <div className="h-100 w-100 bg-secondary">
      <h2>Genero Suspenso {card1Selected} - {card2Selected}</h2>

      <div className="w-100 h-100 d-flex flex-wrap justify-content-center">
        {movies.map((movie, index) => {
          return (
            <MovieCard
            poster={movie.poster}
            found={movie.found}
            onClickCard={onClickCard} index={index} isFlipped={movie.isFlipped} id={movie.id} key={"movie" + movie.id+ "key-"+ index} name={movie.title}></MovieCard>
          );
        })}
      </div>

      <MemoryFinished onReset={onReset} show={allFound} text={"Felicidades!! Lo has conseguido"}></MemoryFinished>
    </div>
  );
};

export default GameInit;

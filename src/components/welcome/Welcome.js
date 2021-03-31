import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import axios from "../../helpers/axios-interceptor";
import {
  chooseGenre,
  selectAllFound,
  selectGenre,
  selectGenres,
  selectLoading,
  setGenres,
  setLoading,
  setMovies,
} from "../../reducers/main";
import Loading from "../loading/Loading";
import MemoryFinished from '../memoryFinished/MemoryFinished';
import GenreCard from "./genreCard";
const Welcome = (props) => {


  const genreSelected = useSelector(selectGenre);
  const genres= useSelector(selectGenres);
  const loading = useSelector(selectLoading);
 
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        let resp = await axios.get("/genre/movie/list");
        // console.log(resp);
        dispatch(setGenres(resp.genres));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

useEffect(()=>{
  console.log(genres);
},[genres])

  useEffect(() => {
    if (genreSelected != null) {
      SearchMovies();
    }
  }, [genreSelected]);

  const SearchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?language=es&page=1&with_genres=" +
          genreSelected
      );

      dispatch(setMovies(response.results));
    } catch (e) {
      console.log(e);
      dispatch(setLoading());
    }
  };

  const onCardClick = (genre) => {
    dispatch(setLoading());
    dispatch(chooseGenre(genre));
  };
  return (
    <>
      <div style={{overflowY:"auto", height:"100vh"}}> 
        <h1>Memoria de película!</h1>
        <h3>Selecciona un género para comenzar</h3>
        <h1>{genreSelected}</h1>
    
        <br></br>
        <Row  className="d-flex flex-wrap justify-content-center">
          {genres.map((genre) => {
            return (
              <GenreCard
              className="onHover"
                onCardClick={onCardClick}
                id={genre.id}
                key={"id-genre-" + genre.id}
                name={genre.name}
              ></GenreCard>
            );
          })}
        </Row>
      </div>

      <Loading show={loading} text={"Cargando Juego"}></Loading>
     
    </>
  );
};

export default Welcome;

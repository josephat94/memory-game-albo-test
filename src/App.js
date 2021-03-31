import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Welcome from "./components/welcome/Welcome";
import GameInit from "./components/gameInit/GameInit";
import { useSelector } from "react-redux";
import { selectGenre, selectMovies } from "./reducers/main";

function App() {
  const movies = useSelector(selectMovies);
  const genreSelected = useSelector(selectGenre);


  return (
    <div className="App bg-secondary">
      {/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
      <Router>
        <Switch>
          <Route path="/memory">
            {movies.length > 0 && genreSelected ? (
              <GameInit></GameInit>
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/">
            {movies.length > 0 && genreSelected ? (
              <Redirect to="/memory" />
            ) : (
              <Welcome></Welcome>
            )}
          </Route>
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

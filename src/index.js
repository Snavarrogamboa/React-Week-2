import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import MovieList from "./components/movie-list";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <MovieList />
  </React.StrictMode>,
  document.getElementById("root")
);


//This was a somewhat difficult project for me
//Had lots of help on this one
//Thank you to my classmates for helping out on this one and the mentors
reportWebVitals();
//Movie List Component

import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
  render() {
    let firstMovie = {
      title: "Spider-Man Into the Spider-Verse",
      year: "2018",
      uri:
        "https://images-na.ssl-images-amazon.com/images/I/91Tr%2BbhnMUL._AC_SL1500_.jpg",
    };

    let secondMovie = {
        title: "Fantastic Mr. Fox",
        year: "2009",
        uri:
          "https://images-na.ssl-images-amazon.com/images/I/91IwlKj9ENL._RI_.jpg",
    };

    let thirdMovie = {
        title: "Monsters Inc.",
        year: "2001",
        uri:
          "https://resizing.flixster.com/YL2uY_OxeLWt2fgb9Pt740dkkLM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzVmMjE2ODVkLTU3MGMtNGQxYS1hYTJjLWRmMTMyMDIyOTVlZi53ZWJw",
    };
    return (
      <div>
        <div className="container">
        <h1 class="display-1">Best Animated Films</h1>
          <div>
            <Movie {...firstMovie} />
            <br />
            <Movie {...secondMovie} />
            <br />
            <Movie {...thirdMovie} />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
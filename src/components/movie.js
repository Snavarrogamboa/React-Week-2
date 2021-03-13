//Movie component

import React from "react";
import Stars from "./stars";
import ReviewList from "./review-list";

//rendering the movie card which includes the title and year and the footer of the card inlcudes the reviews and ratings

export default class Movie extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header movie">
          <span className="title">{this.props.title}</span> <br></br>{this.props.year}
        </div>
        <div className="card-body">
          <img src={this.props.uri} alt="Movie Poster" className="container" />{" "}
          <br />
          <p>
            <b>{this.props.rating}</b>
            <br />
          </p>
        </div>
        <div className="card-footer">
          <Stars />
          <br />
          <ReviewList />
        </div>
      </div>
    );
  }
}
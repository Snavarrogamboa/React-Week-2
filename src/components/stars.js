//stars component

import React from "react";

export default class Stars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: " ",
      ratings: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.resetForm();
  }

  addRating() {
    let ratings = this.state.ratings;
    ratings.push(this.state.rating);
    this.setState({
      ratings,
    });
  }

  listRatings() {
    let ratings = this.state.ratings;
    return (
      <ul>
        {ratings.map((value, index) => {
          return (
            <li key={`${index}`} className="stars">
              <h6>{value}/5</h6>
            </li>
          );
        })}
      </ul>
    );
  }

  resetForm() {
    this.setState({
      rating: " ",
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header user text-black">Rate this Movie!</div>
        <div className="card-body">
          {this.listRatings()}
          <form onSubmit={this.handleSubmit}>
            <b>How many stars do you give this movie?</b>
            <br></br>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="1"
                checked={this.state.rating === "1"}
                onChange={this.handleChange}
              />
              <label className="form-check-label">★</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="2"
                checked={this.state.rating === "2"}
                onChange={this.handleChange}
              />
              <label className="form-check-label">★★</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="3"
                checked={this.state.rating === "3"}
                onChange={this.handleChange}
              />
              <label className="form-check-label">★★★</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="4"
                checked={this.state.rating === "4"}
                onChange={this.handleChange}
              />
              <label className="form-check-label">★★★★</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="5"
                checked={this.state.rating === "5"}
                onChange={this.handleChange}
              />
              <label className="form-check-label">★★★★★</label>
              <br />
            </div>
            <br></br>
            <button
              className="btn"
              class="btn btn-primary" 
              type="submit" 
              value="Submit"
              onClick={() => this.addRating()}
            >
              Add Rating
            </button>
          </form>
        </div>
      </div>
    );
  }
}
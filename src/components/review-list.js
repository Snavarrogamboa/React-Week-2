//review list component

import React from "react";
import ReviewForm from "./review-form";

export default class ReviewList extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header user text-black">Leave a Review!</div>
        <div className="card-body">
          <ReviewForm />
        </div>
      </div>
    );
  }
}
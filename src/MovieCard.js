import React from "react";
import "./MovieCard.css";

function MovieCard({ title, posterPath, averageRating }) {
  let cardColor;
  if (averageRating < 4) {
    cardColor = "red-card";
  } else if (averageRating < 5) {
    cardColor = "orange-card";
  } else if (averageRating < 6) {
    cardColor = "blue-card";
  } else if (averageRating < 7) {
    cardColor = "green-card";
  } else {
    cardColor = "yellow-card";
  }

  return (
    <div className={`${cardColor} movie-card`}>
      <img
        src={posterPath}
        alt={`poster for ${title}`}
        className="card-poster"
      />
      <div className="title-rating">
        <p>{title}</p>
        <p>{averageRating} ⭐</p>
      </div>
    </div>
  );
}

export default MovieCard;

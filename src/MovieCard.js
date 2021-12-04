import React from 'react';
import './MovieCard.css';

function MovieCard({title,posterPath,averageRating}) {
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
    <div className={cardColor}>
      {/* <h3>{title}</h3> */}
      <img src={posterPath} alt= "poster image of movie" className="card-poster"/>
      <h3>{title}</h3>
      <p>{averageRating.toFixed(1)}  ⭐</p>
    </div>
  )
}

export default MovieCard;
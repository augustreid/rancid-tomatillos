import React from 'react';
import './MovieCard.css';

function MovieCard({title,posterPath,averageRating}) {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <img src={posterPath} alt= "poster image of movie" className="card-poster"/>
      <h5>{averageRating.toFixed(1)}⭐</h5>
    </div>
  )
}

export default MovieCard;
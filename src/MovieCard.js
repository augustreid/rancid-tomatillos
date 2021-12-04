import React from 'react';
import './MovieCard.css';

function MovieCard({title,posterPath,averageRating}) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={posterPath} alt= "poster image of movie"/>
      <h5>{averageRating.toFixed(1)}⭐</h5>
    </div>
  )
}

export default MovieCard;
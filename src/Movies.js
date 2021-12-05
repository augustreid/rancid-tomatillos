import React from 'react';
import MovieCard from './MovieCard';
import './Movies.css';

function Movies({moviesInfo, displayDetails}) {
    const film = moviesInfo.map(movie => {
      return (
        <MovieCard
            displayDetails = {displayDetails}
            id = {movie.id}
            key = {movie.id}
            title = {movie.title}
            posterPath = {movie.poster_path}
            averageRating = {movie.average_rating}
        />
      )
    })
  return (
      <div className="movies-container">
          {film}
      </div>
  )
}

export default Movies;
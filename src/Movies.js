import React from 'react';
import MovieCard from './MovieCard';
import './Movies.css';

function Movies({moviesInfo}) {
    const film = moviesInfo.map(movie => {
      return (
        <MovieCard
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
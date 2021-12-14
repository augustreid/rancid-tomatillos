import React from "react";
import MovieCard from "./MovieCard";
import "./Movies.css";
import { Link } from "react-router-dom";

function Movies({ moviesInfo }) {
  const film = moviesInfo.map((movie) => {
    return (
      <Link to={`/movies/${movie.id}`} key={movie.id}>
        <MovieCard
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          averageRating={movie.average_rating.toFixed(1)}
        />
      </Link>
    );
  });
  
  return (
    <div className="movies-container">
      {film}
    </div>);
  }

export default Movies;

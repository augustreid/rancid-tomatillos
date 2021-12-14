import React from "react";
import {useParams, Link} from "react-router-dom";
import "./Movies.css"
import "./Genre.css"
import MovieCard from "./MovieCard";

function GenreDisplay({detailData}) {
  const movieGenre = useParams().genre
  const filteredMovies = detailData.filter((film) => {
    return film.movie.genres.includes(movieGenre)
  })
  const justGenre = filteredMovies.map((movie) => {
    return (
      <Link to={`/movies/${movie.movie.id}`} key={movie.movie.id}>
        <MovieCard
          id={movie.movie.id}
          title={movie.movie.title}
          posterPath={movie.movie.poster_path}
          averageRating={movie.movie.average_rating.toFixed(1)}
        />
      </Link>
    );
  });
  return (
    <div className="movies-container">
        {justGenre}
    </div>);
}

export default GenreDisplay;
import React from "react";
import {useParams, Link} from "react-router-dom";
import MovieCard from "./MovieCard";

function GenreDisplay({detailData}) {
    const movieGenre = useParams().genre
    console.log(detailData, "movie deets")
    const filteredMovies = detailData.filter((film) => {
        return film.genres.includes(movieGenre)
    })
       const justGenre = filteredMovies.map((movie) => {
        return (
          <Link to={`/${movie.id}`} key={movie.id}>
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
            {justGenre}
        </div>);
}

export default GenreDisplay;
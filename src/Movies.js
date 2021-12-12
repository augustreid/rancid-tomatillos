import React from "react";
import MovieCard from "./MovieCard";
import "./Movies.css";
import Detail from "./Detail"
import { Link, Routes, Route } from "react-router-dom";

function Movies({ moviesInfo, detailData}) {
  const film = moviesInfo.map((movie) => {
    return (
      <>
      <Link to={`/${movie.id}`} key={movie.id}>
        <MovieCard
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          averageRating={movie.average_rating.toFixed(1)}
        />
      </Link>
      <Routes>
      <Route path="/:id"  element={<Detail moviesInfo={moviesInfo} detailData={detailData}/>}/>  
      </Routes>
      </>
    );
  });
  
  return (<div className="movies-container">
            {film}
          </div>);
}

export default Movies;

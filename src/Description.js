import React from 'react';
import './Description.css';
import Poster from './Poster';
import Button from './Button';

function Description({currentFilmId, detailData}) {
  const currentMovie = detailData.find((film) => {
    return film.movie.id === Number(currentFilmId)
})
  return (
        <>
        <section>
          <Poster backdropPath={currentMovie.movie.backdrop_path} title={currentMovie.movie.title}/>
          <h2>{currentMovie.movie.title}</h2>
          <p>{currentMovie.movie.release_date}</p>
          <p>{currentMovie.movie.overview}</p>
          <h3>{currentMovie.movie.average_rating.toFixed(1)}  :star:️</h3>
          <Button />
        </section>
        </>
    )
}
export default Description;
import React from 'react';
import Description from './Description';
import './Detail.css';
import Poster from './Poster';
import Button from './Button';

function Detail({singleMovie, backToMain}) {
  return (
   <main className="details-page">
     <div className="movie-details">
       <Poster title={singleMovie.title} backdropPath={singleMovie.backdrop_path}/>
       <Description title={singleMovie.title} rating={singleMovie.average_rating}/>
      </div>
       <Button backToMain={backToMain}/>
   </main>
  );
}

export default Detail;
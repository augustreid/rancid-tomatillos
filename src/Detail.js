import React from 'react';
import Description from './Description';
import './Detail.css';
import Poster from './Poster';
import Button from './Button';

function Detail({singleMovie, backToMain}) {
  return (
   <div>
       <Poster title={singleMovie.title} backdropPath={singleMovie.backdrop_path}/>
       <Description title={singleMovie.title} rating={singleMovie.average_rating}/>
       <Button backToMain={backToMain}/>
   </div>
  );
}

export default Detail;
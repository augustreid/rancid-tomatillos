import React from 'react';
import Description from './Description';
import './Detail.css';
import { useParams} from 'react-router-dom';

const Detail = () => {
  const currentFilm = useParams().id;

  return (
    <div className="movie-details">
      <Description currentFilmId={currentFilm}/>
    </div> 
  );
}

export default Detail;
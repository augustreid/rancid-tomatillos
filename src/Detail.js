import React from 'react';
import Description from './Description';
import './Detail.css';
import { useParams, Routes, Route } from 'react-router-dom';

const Detail = ({detailData}) => {
  const currentFilm = useParams().id;

  return (
    <div className="movie-details">
     <Description currentFilmId={currentFilm} detailData={detailData}/>
    </div> 
  );
}

export default Detail;
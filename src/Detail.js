import React from 'react';
import Description from './Description';
import './Detail.css';
import { useParams} from 'react-router-dom';

const Detail = () => {
  const currentFilm = useParams().id;

  return (
   <main className="details-page">
     <div className="movie-details">
       <Description currentFilmId={currentFilm}/>
    </div>
   </main>
  );
}

export default Detail;
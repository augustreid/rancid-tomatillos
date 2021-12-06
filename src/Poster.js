import React from 'react';
import './Poster.css';

function Poster({backdropPath, title}) {
  return (
    <div className="img-container">
   <img className="poster" src={backdropPath} alt={`scene from ${title}`}/>
   </div>
  )
}

export default Poster;
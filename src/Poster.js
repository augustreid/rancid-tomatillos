import React from 'react';
import './Poster.css';

function Poster({backdropPath, title}) {
  return (
   <img src={backdropPath} alt={`scene from ${title}`}/>
  )
}

export default Poster;
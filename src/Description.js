import React from 'react';
import './Description.css';

function Description({title, rating, summary, releaseDate}) {
  return (
    <div>
    <h2>{title}</h2>
    <p>{releaseDate}</p>
    <p>{summary}</p>
    <h3>{rating.toFixed(1)}  ⭐️</h3>
    </div>
  )
}

export default Description;
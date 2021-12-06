import React from 'react';
import './Description.css';

function Description({title, rating}) {
  return (
    <div>
    <h2>{title}</h2>
    <p>Some more text about the movie blah blah blah this is a movie blah blah.</p>
    <h3>{rating.toFixed(1)}  ⭐️</h3>
    </div>
  )
}

export default Description;
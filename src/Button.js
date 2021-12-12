import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function Button({backToMain}) {
  return (
    <Link to="/" ><button> ⬅ Back to Main</button></Link>
  );
}

export default Button;
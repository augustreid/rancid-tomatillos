import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <Link to="/" key={Date.now()}><button> ⬅ Back to Main</button></Link>
  );
}

export default Button;
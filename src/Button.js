import React from 'react';
import './Button.css';

function Button({backToMain}) {
  return (
   <button onClick={() => backToMain()}>Back to Main</button>
  );
}

export default Button;
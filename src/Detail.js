import React from 'react';
import Description from './Description';
import './Detail.css';
import Poster from './Poster';
import Button from './Button';

function Detail() {
  return (
   /* event listener for card, display card */ 
   <div>
       <Poster/>
       <Description/>
       <Button/>
   </div>
  );
}

export default Detail;
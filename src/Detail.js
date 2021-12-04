import React from 'react';
import Description from './Description';
import './Detail.css';

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
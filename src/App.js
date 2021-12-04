import React, { Component } from 'react';
import movieData from './movieData';
import './App.css';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  return (
    <main>
   <Header/>
   <Movies movieInfo={this.state.movies}/>
   <Details/> 
   </main>
  );
}

export default App;

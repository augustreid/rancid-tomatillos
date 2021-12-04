import React, { Component } from 'react';
import movieData from './movieData';
import './App.css';
import Header from './Header';
import Movies from './Movies';
import Detail from './Detail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
  return (
    <main>
      <Header/>
      <Movies moviesInfo={this.state.movies}/>
      {/* <Detail/>  */}
    </main>
    )
  }
}

export default App;

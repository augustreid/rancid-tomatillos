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
      movies: [],
      singleMovie: null
    }
  }
  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
  }


  displayDetails = (event, id) => {
    event.preventDefault()
    const selectedMovie = this.state.movies.find((movie) => {
      return movie.id === id;
    })
    this.setState({movies: movieData.movies, singleMovie: selectedMovie})
  }

  backToMain = () => {
    this.setState({singleMovie: null})
  }

  render() {
  return (
    <main>
      <Header/>
      {this.state.singleMovie ? 
      <Detail backToMain={this.backToMain} singleMovie={this.state.singleMovie}/> : 
      <Movies displayDetails={this.displayDetails} moviesInfo={this.state.movies}/>}
    </main>
    )
  }
}

export default App;

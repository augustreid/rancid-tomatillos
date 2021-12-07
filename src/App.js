import React, { Component } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
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
      singleMovie: null,
      error: false
    }
  }
  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
      .catch(error => this.setState({error: true}))
  }


  displayDetails = (event, id) => {
    event.preventDefault()
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => this.setState({movies: movieData.movies, singleMovie: data.movie}))
    .catch(error => this.setState({error: true}))  
  }

  backToMain = () => {
    this.setState({singleMovie: null})
  }

  render() {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={<Movies moviesInfo={this.state.movies}/>}/>
        <Route path="/:id"  element={<Detail moviesInfo={this.state.movies}/>}/>
      </Routes>
    </main>
    )
  }
}

export default App;

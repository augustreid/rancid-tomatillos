import React, { Component } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Movies from './Movies';
import Detail from './Detail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false
    }
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
      .catch(error => this.setState({error: true}))
  }
  
  render() {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={<Movies moviesInfo={this.state.movies} />}/>
        <Route path="/:id"  element={<Detail moviesInfo={this.state.movies} />}/>
      </Routes>
    </main>
    )
  }
}

export default App;

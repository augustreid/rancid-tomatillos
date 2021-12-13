import React, { Component } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Movies from './Movies';
import Detail from './Detail';
import Genre from "./Genre"

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filmsInfo: null,
      error: false,
      loading: true
    }
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies, loading: false}))
      .catch(error => this.setState({error: true}))
  }
  
  getDetailData = () => {
    const moviesId = this.state.movies.map((movie)=> {
      return movie.id;
    })
    const allMovies = [];
    for (let i = 0; i < moviesId.length; i++) {
      setTimeout(() => {fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${moviesId[i]}`)
      .then(response => response.json()) 
      .then(data => allMovies.push(data))
      .catch(error => this.setState({error: true}))
      }, 500)
    }
    this.setState({ filmsInfo: allMovies })
  }


  render() {
    return (
      <main>
        {this.state.error && <p>Sorry, can't fetch Data</p>}
        {!this.state.loading && <div>
        <Header/>
        <Genre loading={this.state.loading} getDetailData={this.getDetailData} detailData={this.state.filmsInfo}/>
        <Routes>
          <Route path="/" element={<Movies moviesInfo={this.state.movies} detailData={this.state.filmsInfo} getDetailData={this.getDetailData}/>}/>
          <Route path="/movies/:id"  element={<Detail moviesInfo={this.state.movies} detailData={this.state.filmsInfo}/>}/> 
        </Routes>
        </div>}
      </main>
    )
  }
}

export default App;


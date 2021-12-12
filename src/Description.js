import React, { Component } from 'react';
import './Description.css';
import Poster from './Poster';
import Button from './Button';

class Description extends Component {
  constructor(){
    super()
    this.state = {
      loading: true,
      singleMovie: null,
    }
  }

  componentDidMount = () => {
      console.log(this.props.detailData)
      const currentMovie = this.props.detailData.find((film) => {
        return film.movie.id === this.props.currentFilmId
  })
  this.setState({singleMovie: currentMovie})
}

  // componentDidMount = () => {
  //     fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.currentFilmId}`)
  //     .then(response => response.json())
  //     .then(data => this.setState({singleMovie: data.movie, loading: false}))
  //     .then(this.render())
  //     .catch(error => this.setState({error: true}))  
  //   }
  
  backToMain = () => {
      this.setState({singleMovie: null})
    }

  render() {
    return (
      <>
        <div>
          <Poster backdropPath={this.state.singleMovie.movie.backdrop_path} title={this.state.singleMovie.movie.title}/>
          <h2>{this.state.singleMovie.movie.title}</h2>
          <p>{this.state.singleMovie.movie.release_date}</p>
          <p>{this.state.singleMovie.movie.overview}</p>
          <h3>{this.state.singleMovie.movie.average_rating.toFixed(1)}  ⭐️</h3>
          <Button backToMain={this.backToMain}/>
        </div>
      </>
    )
  }
}

export default Description;
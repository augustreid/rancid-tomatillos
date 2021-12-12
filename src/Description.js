import React, { Component } from 'react';
import './Description.css';
import Poster from './Poster';
import Button from './Button';

// class Description extends Component {
//   constructor(){
//     super()
//     this.state = {
//       loading: true,
//       singleMovie: null,
//     }
//   }

//   componentDidMount = () => {
//       const allFilms = this.props.detailData
//       const filmId = Number(this.props.currentFilmId)
//       const currentMovie = allFilms.find((film) => {
//         return film.movie.id === filmId
//   })
//   this.setState({loading: false, singleMovie: currentMovie.movie})
// }

//   // componentDidMount = () => {
//   //     fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.currentFilmId}`)
//   //     .then(response => response.json())
//   //     .then(data => this.setState({singleMovie: data.movie, loading: false}))
//   //     .then(data => console.log(data))
//   //     .catch(error => this.setState({error: true}))  
//   //   }
  
//   backToMain = () => {
//       this.setState({singleMovie: null})
//     }

//   render() {
//     return (
//         <>
//         {!this.state.loading && <section>
//           <Poster backdropPath={this.state.singleMovie.backdrop_path} title={this.state.singleMovie.title}/>
//           <h2>{this.state.singleMovie.title}</h2>
//           <p>{this.state.singleMovie.release_date}</p>
//           <p>{this.state.singleMovie.overview}</p>
//           <h3>{this.state.singleMovie.average_rating.toFixed(1)}  ⭐️</h3>
//           <Button backToMain={this.backToMain}/>
//         </section>}
//         </>
//     ) 
//   }
// }

function Description({currentFilmId, detailData}) {
      // const allFilms = this.props.detailData
      // const filmId = Number(this.props.currentFilmId)
      const currentMovie = detailData.find((film) => {
        return film.movie.id === Number(currentFilmId)
    })
    return (
            <>
            {!detailData && <section>
              <Poster backdropPath={currentMovie.backdrop_path} title={currentMovie.title}/>
              <h2>{currentMovie.title}</h2>
              <p>{currentMovie.release_date}</p>
              <p>{currentMovie.overview}</p>
              <h3>{currentMovie.average_rating.toFixed(1)}  ⭐️</h3>
              <Button />
            </section>}
            </>
        ) 
}

export default Description;
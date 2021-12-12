import React, {Component} from "react"

// function Genre({moviesInfo, getDetailData}) {
//    setTimeout(() => {
//        getDetailData()
//    }, 500);
   
//     return (
//         <p>genres</p>
//     )
// }

class Genre extends Component {
    constructor() {
        super();
    }

    componentDidMount = () => {
        this.props.getDetailData();
    }

    // getDetailData = () => {
    //     const moviesId = this.props.movieInfo.map((movie)=> {
    //       return movie.id;
    //     })
    //     const allMovies = [];
    //     for (let i = 0; i < moviesId.length; i++) {
    //       setTimeout(() => {fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${moviesId[i]}`)
    //       .then(response => response.json()) 
    //       .then(data => allMovies.push(data))
    //       }, 100)
    //     }
    //     this.setState({ detailData: allMovies })
    //   }

      render() {
          return (
              <h1>testing</h1>
          )
      }
    }


export default Genre;
import React, {Component} from "react"
import { NavLink, Routes, Route, Link } from "react-router-dom";
import GenreDisplay from "./GenreDisplay";

class Genre extends Component {
    constructor() {
        super();
    }

    componentDidMount = () => {
        this.props.getDetailData();
    }

      render() {
          return (
                <nav>
                  <Link to={"/Action"}>Action</Link>
                  <NavLink to={"/Comedy"}>Comedy</NavLink>
                  <NavLink to={"/Crime"}>Crime</NavLink>
                  <NavLink to={"/Drama"}>Drama</NavLink>
                  <NavLink to={"/Family"}>Family</NavLink>
                  <NavLink to={"/Horror"}>Horror</NavLink>
                  <NavLink to={"/Thriller"}>Thriller</NavLink>
                  <NavLink to={"/Romance"}>Romance</NavLink>
                  <Routes>
                     {this.props.detailData && <Route path="/:genre" element={<GenreDisplay detailData={this.props.detailData} moviesInfo={this.props.moviesInfo}/>}/>}
                  </Routes>
              </nav>
          )
      }
    }


export default Genre;
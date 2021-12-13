import React, {Component} from "react"
import { NavLink, Routes, Route} from "react-router-dom";
import Button from "./Button";
import GenreDisplay from "./GenreDisplay";
import "./Genre.css";

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
                  <Button />
                  <NavLink to={"/Action"}>Action</NavLink>
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
import React, {Component} from "react"
import { NavLink } from "react-router-dom";

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
                  <NavLink to={"/Action"}>Action</NavLink>
                  <NavLink to={"/Comedy"}>Comedy</NavLink>
                  <NavLink to={"/Crime"}>Crime</NavLink>
                  <NavLink to={"/Drama"}>Drama</NavLink>
                  <NavLink to={"/Family"}>Family</NavLink>
                  <NavLink to={"/Horror"}>Horror</NavLink>
                  <NavLink to={"/Thriller"}>Thriller</NavLink>
                  <NavLink to={"/Romance"}>Romance</NavLink>
                  <NavLink to={"/ScienceFiction"}>Science Fiction</NavLink>
              </nav>
          )
      }
    }


export default Genre;
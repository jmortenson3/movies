import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const CONFIG = require('../config.json');

class MovieGenres extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(`${CONFIG.BASE_URL}/genre/movie/list?api_key=${CONFIG.API_KEY}`)
      .then(res => {
        if (!res.ok) {
          throw Error("Network request failed.");
        }
        return res;
      })
      .then(data => data.json())
      .then(data => {
        console.log(data.genres);
        this.setState({data: data.genres})
      }, () => {
        this.setState({requestFailed: true})
      })
  }

  render() {
    const genreList = this.state.data.map(genre => {
      return <li key={genre.id}><Link to={`/movies/genres/${genre.name}`}>{genre.name}</Link></li>;
    });
    return (
      <ul>
          { genreList }
      </ul>
    );
  }
}

export default MovieGenres;
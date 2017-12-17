import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieThumbnail from './MovieThumbnail';

class MovieCard extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="movieCard">
          <Link to={`/movies/id/${ this.props.id }`}>
            <MovieThumbnail
              styles={ this.props.imgStyles } 
              width={ this.props.imgWidth }
              height={ this.props.imgHeight }
              src={ this.props.imgSrc } />
            <p>
              { this.props.title }
            </p>
            
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
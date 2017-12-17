import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieThumbnail from './MovieThumbnail';

class MovieListItem extends Component {
  
  render() {
    
    return (
      <tr>
        <td className="posterField">
          <Link to={`/movies/id/${ this.props.id }`}>
            <MovieThumbnail
              styles={ this.props.imgStyles } 
              width={ this.props.imgWidth }
              height={ this.props.imgHeight }
              src={ this.props.imgSrc } />
          </Link>
        </td>
        <td className="titleField">
          <Link to={`/movies/id/${ this.props.id }`}>
            { this.props.title }
          </Link>
        </td>
        <td className="yearField">{ this.props.year }</td>
        <td className="ratedField">{ this.props.rated }</td>
      </tr>
    );

  }

}

export default MovieListItem;
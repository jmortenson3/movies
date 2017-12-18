import React, { Component } from 'react';
import MovieCard from './MovieCard';
import MovieListItem from './MovieListItem';
import NoMoviesFound from './NoMoviesFound';
import MovieList from './MovieList';
import NavButton from './NavButton';
import MovieAPI from '../api';

/**
 * Generate either a MovieList or an array of MovieCard's.
 * 
 * <= 767px width changes the layout to table.  >767px is cards.
 */
class MovieGrouping extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screenWidth: 100
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    const screenWidth = window.innerWidth;
    this.setState({screenWidth: screenWidth});
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillMount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const screenWidth = this.state.screenWidth;
    let displayType = screenWidth <= 767 ? 'List' : 'Cards';
    console.log(`Begin rendering a ${displayType} view.`);
    let searchVal = this.props.match.params.genre;
    let imgSize = displayType === 'Cards' ? 1 : .5;
    let imgWidth = 150 * imgSize;
    let imgHeight = 225 * imgSize;
    let movieList = [];
    let movieGroup;
    let numImgsPerPage = 50;

    MovieAPI.getMoviesByKeyVal('Genre', 
      searchVal, numImgsPerPage)
      .map((movie, index) => {

      if (displayType === 'Cards') {
        movieList.push(
          <MovieCard
            key={ movie.imdbID }
            id={ movie.imdbID }
            imgWidth={ imgWidth } 
            imgHeight={ imgHeight }
            imgSrc={ movie.Poster }
            title={ movie.Title }
            actors={ movie.Actors }
            plot={ movie.Plot }
            runtime={ movie.Runtime }
            rated= { movie.Rated }
            styles="col-md-2 movieCard" />
        );
      } else if (displayType === 'List') {
        movieList.push(
          <MovieListItem
            key={ movie.Title }
            id={ movie.imdbID }
            imgWidth={ imgWidth } 
            imgHeight={ imgHeight }
            imgSrc={ movie.Poster }
            title={ movie.Title }
            year={ movie.Year }
            rated= { movie.Rated }
            imgStyles="movieInThumbList" />

        )
      }
      return true;
    });  // end map

    if (displayType === 'Cards') {
      movieGroup = 
        <div className="row genreRow">
          <div className="row col-md-12 genreTitle">
            <h2>{ searchVal }</h2>
          </div>
          <div className="row flex-row genreMovies col-md-12">
            { movieList }
          </div>
        </div>;
    } else if (displayType === 'List') {
      movieGroup = 
        <MovieList 
          listName={ searchVal } 
          listItems={ movieList } />;
    }

    if (movieList.length === 0) {
      movieGroup =
        <NoMoviesFound searchVal={searchVal} />;
    }
    return (
      <div>
        { movieGroup }
      </div>
    );
  }
}

export default MovieGrouping;
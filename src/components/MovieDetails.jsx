import React, { Component } from 'react';
import MovieAPI from '../api';



class MovieDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }

  loadMoveDetails() {
    const movie_id = this.props.match.params.id;
    this.setState({movie: MovieAPI.getMovieById(movie_id)});
  }

  componentWillMount() {
    this.loadMoveDetails();
  }

  render() {
    let movie = this.state.movie;
    let display;
    if (movie === undefined) {
      display = 
        <div>
          <h1>Hmm...we couldn't find this movie.</h1>
          <small>Did you take a wrong turn somewhere?</small>
        </div>;
    } else {
      display =
        <div className="col">
          <div className="card">
            <div className="card-body">
              <img className="cardImg" src={ movie.Poster } width="300" alt={movie.Title} />
              <h1>            
                { movie.Title }
                <span className="card-subtitle releasedDate text-muted">
                  { movie.Released }
                </span>
                <br />
                <span className="card-subtitle"><span className="text-danger">{ movie.Rated }</span> | { movie.Runtime }</span>
              </h1>
              <p>
                <strong>Directed by:  </strong>
                { movie.Director }
              </p>
              <p>
                <strong>Produced by:  </strong>
                { movie.Production }
              </p>
              <p>
                <strong>Starring:  </strong>
                { movie.Actors }
              </p>
              <p>
                <strong>Genre:  </strong>
                { movie.Genre }
              </p>
              <p>
                <strong>Written by:  </strong>
                { movie.Writer }
              </p>
              <p>
                <strong>Plot:  </strong>
                { movie.Plot }
              </p>
              <p>
                <strong>Box Office:  </strong>
                { movie.BoxOffice }
              </p>
            </div>
          </div>
        </div>;
        
    }
    return (
      <div className="row MovieDetails">
        { display }
      </div>
    );
  }
}

export default MovieDetails;
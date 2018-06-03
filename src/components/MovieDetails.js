import React, { Component } from 'react';
import MovieAPI from '../api';
const CONFIG = require('../config.json');

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      requestFailed: false
    }
  }

  componentDidMount() {
    console.log(`Getting movie details for movie id: ${this.props.match.params.id}`);
    fetch(`${CONFIG.BASE_URL}/movie/${this.props.match.params.id}?api_key=${CONFIG.API_KEY}`)
      .then(res => {
        if (!res.ok) {
          throw Error("Network request failed.");
        }
        return res;
      })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({movie: data})
      }, () => {
        this.setState({requestFailed: true})
      })
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
          {/*<img className="" src={ movie.Poster } width="300" alt={movie.Title} />*/}
          <div className="movieDetailsText">
            <h1>            
              { movie.title }
              <span className="releasedDate text-muted">
                { movie.released_date }
              </span>
              <br />
            </h1>
            <p>
              <span className="ratedText">
                <span className="text-danger">{ /*movie.Rated*/ }</span> | { movie.runtime } minutes
              </span>
            </p>
            <p>
              <strong>Directed by:  </strong>
              { /*movie.Director*/ }
            </p>
            <p>
              <strong>Produced by:  </strong>
              { /*movie.production_companies*/ }
            </p>
            <p>
              <strong>Starring:  </strong>
              { /*movie.Actors*/ }
            </p>
            <p>
              <strong>Genre:  </strong>
              { /*movie.genres*/ }
            </p>
            <p>
              <strong>Written by:  </strong>
              { /*movie.Writer*/ }
            </p>
            <p>
              <strong>Plot:  </strong>
              { movie.overview }
            </p>
            <p>
              <strong>Box Office:  </strong>
              { movie.revenue }
            </p>
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
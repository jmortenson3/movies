import React, { Component } from 'react';

class NoMoviesFound extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md">
          <h1>Sorry!{ this.props.listName }</h1>
          <p>We couldn't find any { this.props.searchVal } movies...</p>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default NoMoviesFound;
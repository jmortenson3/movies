import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    return(
      <div className="row listView">
        <div className="col-md-2"></div>
        <div className="col-md">
          <h2>{ this.props.listName }</h2>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="posterHeader">Poster</th>
                <th className="titleHeader">Title</th>
                <th className="yearHeader">Year</th>
                <th className="ratedHeader">Rated</th>
              </tr>
            </thead>
            <tbody>{ this.props.listItems}</tbody>
          </table>
        </div>
        <div className="col-md-2"></div>
      </div>
    );
  }
}

export default MovieList;
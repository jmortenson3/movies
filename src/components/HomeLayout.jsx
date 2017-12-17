import React, { Component } from 'react';
import MovieGrouping from './MovieGrouping';
import NavButton from './NavButton';
import MovieAPI from '../api';


// output a new movie grouping per genre?
class HomeLayout extends Component {
  render() {
    let categoryList = [];
    let imgReducer = .5;
    MovieAPI.getGenres().genres.map((genre) => {
      categoryList.push(
        <li>
          <NavButton 
            url={`/movies/genre/${genre.name}`} 
            text={genre.name}/>
        </li>
      );
      return true;
    });
    return (
      <div>
        <ul>
        {categoryList}
        </ul>
      </div>
    );
  }
}

export default HomeLayout;
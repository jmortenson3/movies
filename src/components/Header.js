import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <Link to='/' className="navbar-brand">Watch List</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to={`/movies/genres`}>Genres</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/movies/genres`}>Now Showing</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
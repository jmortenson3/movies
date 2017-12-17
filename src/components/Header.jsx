import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar justify-content-between">
        <Link to='/' className="navbar-brand">Watch List</Link>
        <form className="form-inline">
          <input 
            className="form-control mr-sm-2" 
            id="searchInput" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" id="searchButton" type="submit">Search</button>
        </form>
      </nav>
    )
  }
}

export default NavBar;
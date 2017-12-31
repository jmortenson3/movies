import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <Navbar className="headerNav">
        <Navbar.Header>
          <Navbar.Brand>
          <Link to='/' className="navbar-brand">Watch List</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#"></NavItem>
          <NavDropdown eventKey={3} title="Movies" id="basic-nav-dropdown">
            <MenuItem eventkey={3.1} href={`/movies/genres`}>Genres</MenuItem>
            <MenuItem eventkey={3.1} href={`/movies/genres`}>Now Showing</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;

//<MenuItem eventkey={3.1} href={`/movies/genres`}>Genres</MenuItem>
//<MenuItem eventkey={3.1} href={`/movies/genres`}>Now Showing</MenuItem>
//
//<Link eventkey={3.1} to={`/movies/genres`}>Genres</Link><br />
//<Link eventkey={3.1} to={`/movies/genres`}>Now Showing</Link>
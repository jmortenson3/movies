import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavButton extends Component {
  render() {
    return (
      <li className={this.props.styles}>
        <Link to={`/movies/genre/${this.props.name}`}>
          {this.props.name}
        </Link>
      </li>
    );
  }
}

export default NavButton;
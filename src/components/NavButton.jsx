import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavButton extends Component {
  render() {
    return (
      <div className={this.props.styles}>
        <Link to={ this.props.url }>
          { this.props.text }
        </Link>
      </div>
    );
  }
}

export default NavButton;
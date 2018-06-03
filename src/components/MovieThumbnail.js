import React, { Component } from 'react';

class MovieThumbnail extends Component {
  render() {
    return (
      <div className={ this.props.styles } >
        <img 
          width={ this.props.width } 
          height={ this.props.height } 
          src={ this.props.src } 
          alt={ `${ this.props.src }'s movie poster.` } />
      </div>
    );
  }
}

export default MovieThumbnail;
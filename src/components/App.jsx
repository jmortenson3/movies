import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import MovieDetails from './MovieDetails';
import MovieGrouping from './MovieGrouping';
import HomeLayout from './HomeLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={HomeLayout} />
          <Route path='/movies/genre/:genre' component={MovieGrouping} />
          <Route path='/movies/id/:id' component={MovieDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
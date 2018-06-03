import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import MovieDetails from './MovieDetails';
import MovieGrouping from './MovieGrouping';
import MovieGenres from './MovieGenres';
import HomeLayout from './HomeLayout';

const store = configStore();

const App = () => (
  <Provider store={store}>
    <Header />
    <Switch>
      <Route exact path='/' component={ HomeLayout } />
      <Route exact path='/movies/genres' component={ MovieGenres } />
      <Route path='/movies/genres/:genre' component={ MovieGrouping } />
      <Route path='/movies/id/:id' component={ MovieDetails } />
    </Switch>
  </Provider>
)
export default App;
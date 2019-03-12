import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { NavBar } from './NavBar'
import Home from './Home'
import Movies from './components/Movies'
import SingleMovieDisplay from './components/SingleMovieDisplay'
import GenreDisplay from './components/GenreDisplay'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <Switch>

          <Route exact path="/movies" render={(props) => {
            return <Movies {...props} />
          }} />
          <Route exact path="/movies/byGenre" render={(props) => {
            return <GenreDisplay {...props} />
          }} />
          <Route path="/movies/:id" render={(props) => {
            return <SingleMovieDisplay {...props} />
          }} />



          <Route path="/" render={(props) => {
            return <Home {...props} />
          }} />

      </Switch>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import {MoviesDisplay} from './MoviesDisplay'
import '../css/Movies.css'


export default class Movies extends Component  {
  state = {
    movies:[],
    searchInput:'',
    isSearching:false
  }
  componentDidMount(){
    this.getAllMovies()

  }
  onChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault();
    axios
      .get(`/movies/everythingname/${this.state.searchInput.toLowerCase()}`)
        .then(res => {
          this.setState({
            movies:res.data.data,
            searchInput:''
          })
        })


  }

  getAllMovies = ()=> {
    axios
      .get('/movies/everything')
        .then(res => {
          this.setState({
            movies:res.data.data
          })
        })
  }

  render(){

   return(
     <div className="Movies">
     <form id="movie-form" onSubmit={this.onSubmit}>
     <label href="Search By Movie"/>
     <input onChange={this.onChange} type="text" id="searchInput" value={this.state.searchInput}/>
     <button type="submit">Submit</button>
     </form>
     <MoviesDisplay movies={this.state.movies} isSearching={this.state.isSearching} searchInput ={this.state.searchInput}/>

     </div>
   )


}
}

import React, { Component } from 'react';
import axios from 'axios';
import {MoviesDisplay} from './MoviesDisplay'
import '../css/Movies.css'

export default class GenreDisplay extends Component {
  state = {
    movies:[],
    searchInput:'',
    genres:[]
  }
  componentDidMount(){
    this.getAllMovies()
    this.leGenres()

  }
  onChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  onSubmit = e => {
    if(this.state.searchInput==="all"){
      this.getAllMovies()
    }else{
      e.preventDefault();
      axios
        .get(`/genres/${this.state.searchInput.toLowerCase()}`)
          .then(res => {
            this.setState({
              movies:res.data.data
            })
          })
    }



  }
  leGenres = e => {
    axios
      .get('/genres/getgenres')
        .then(res => {
          this.setState({
            genres:res.data.data
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
    console.log(this.state.searchInput);
  let populate = this.state.genres.map(gen => {
    return ( <option key={gen.name}value={gen.name}>{gen.name}</option>)
  })
  // <input onChange={this.onChange} type="text" id="searchInput" value={this.state.searchInput}/>

   return(
     <div className="Movies">
     <form id="movie-form" onSubmit={this.onSubmit}>
     <select id="searchInput" onChange ={this.onChange} placeholder="Select Genre" name = "searchInput" value = {this.state.searchInput}>
     <option key={`all`}value='all'></option>
     {populate}
     </select>
     <button id="searchInput" type="submit">Search By Genre</button>
     </form>

     <MoviesDisplay movies={this.state.movies}  searchInput ={this.state.searchInput}/>

     </div>
   )


  }
}

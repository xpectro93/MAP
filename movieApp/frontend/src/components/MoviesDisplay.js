import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Movies.css'


export const MoviesDisplay = (props) => {


  let movieShow = props.movies.map(mov => {


    return (
      <div className="movie-container" key={mov.title}>
      <Link to={`/movies/${mov.id}`}>  <h1 >{mov.title}</h1> </Link>
      <Link to={`/movies/${mov.id}`}><div className="movie-poster-s"><img  src= {mov.img_url} alt="movie poster"/></div></Link>
      <h1>RATING: {Math.floor(mov.ar)} stars</h1>
      </div>
    )
  })

    console.log(props.movies);
  return(
<div>{movieShow}</div>
  )
}

import React from 'react'
import '../css/Movies.css'

export const ShowMovie = props => {
  // console.log(props.props.match.params.id);
// title. img.genre.stars
  return (
    <div className='movie'>
    <h2>{props.movie.title}</h2>
    <h3>{props.movie.name}</h3>

    <img id='movie-poster' src={props.movie.img_url} alt="movie poster"/>
    <h3>{Math.floor(props.movie.ar).toString()} Stars</h3>

    </div>
  )
}

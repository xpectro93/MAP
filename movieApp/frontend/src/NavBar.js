import React from 'react'
import './css/NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {


  return(
    <nav>
      <div className="navbar">
      <div id="navbar1">
        <Link to='/home'>Home</Link>
        </div>
        <div id="navbar2">
        <Link to='/movies'>All Movies</Link>
        <Link to='/movies/byGenre'>By Genre</Link>
        </div>
      </div>
    </nav>
  )
}

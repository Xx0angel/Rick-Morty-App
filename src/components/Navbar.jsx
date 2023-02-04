import React from 'react'
import RickLogo from '../img/rickandmorty.png'
import '../navbar.css'

function Navbar() {
  return (
    <nav className='navbar px-2 bg-dark'>
        <img width="200px"src={ RickLogo } alt="Rick and morty"/>
    </nav>
  )
}

export default Navbar
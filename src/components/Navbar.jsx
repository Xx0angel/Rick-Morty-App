import React from 'react'
import RickLogo from '../img/rickandmorty.png'
import '../navbar.css'

function Navbar() {
  return (
    <nav className='navbar text-center py-2 px-2'>
        <img width="200px"src={ RickLogo } alt="Rick and morty"/>
    </nav>
  )
}

export default Navbar
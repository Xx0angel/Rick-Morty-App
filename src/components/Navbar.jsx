import React from 'react'
import RickLogo from '../img/rickandmorty.png'


function Navbar() {
  return (
    <nav className='text-center'>
        <img className='py-4 px-4' width="250px"src={ RickLogo } alt="Rick and morty"/>
    </nav>
  )
}

export default Navbar
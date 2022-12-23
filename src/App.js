import React from 'react'
import CharacterList from './components/CharacterList'
import Navbar from './components/Navbar'

export function App () {

  return (<div className='bg-dark text-white'>
      <Navbar/>
      <CharacterList />
    </div>
  )
}


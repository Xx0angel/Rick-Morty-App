import React from 'react'
import CharacterList from './components/CharacterList'
import Herobanner from './components/Herobanner'
import Navbar from './components/Navbar'
import '../src/App.css'

export function App () {

  return (<div className='bg-app text-white'>
      <Navbar/>
      <Herobanner/>
      <CharacterList />
    </div>
  )
}


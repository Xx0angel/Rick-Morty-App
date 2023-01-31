import { useEffect, useState } from 'react'
import Character from './Character'

function Header(props) {
  return (
    <header className='d-block justify-content-between align-items-center pb-5'>
      
      <div className='d-flex justify-content-between align-items-center'>
        <button className='btn btn-primary btn-sm'
          onClick={() => props.setPage(props.page - 1)}>
          Pagina Anterior 
        </button>
        <p>Pagina: {props.page}</p>
        <button className='btn btn-primary btn-sm' 
          onClick={() => props.setPage(props.page + 1)}>
          Siguiente Pagina 
        </button>
      </div>
    </header>
  )
}

function CharacterList() {

  const [characters, setCharacters] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()
      setloading(false)
      setCharacters(data.results)
    }

    fetchData()
  }, [page])

  return (
    <div className='container'>

      <Header page={page} setPage={setPage} />

      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className='row'>
          {characters.map((character) => {
            return (
              <div className='col-md-4' key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

      <Header page={page} setPage={setPage} />

    </div>
  )
}

export default CharacterList
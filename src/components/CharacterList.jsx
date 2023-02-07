import { useEffect, useState } from 'react'
import Character from './Character'

function Header(props) {
  return (
    <header className='d-block justify-content-between align-items-center py-5'>

      <div className='d-flex justify-content-between align-items-center'>
        <button className='btn btn-primary btn-sm'
          onClick={() => props.setPage(props.page - 1)} disabled={props.page === 1}>
          Anterior
        </button>
        <p>Pagina: {props.page}</p>
        <button className='btn btn-primary btn-sm'
          onClick={() => props.setPage(props.page + 1)} disabled={props.page === props.lastPage}>
          Siguiente
        </button>
      </div>
    </header>
  )
}

function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);

  useEffect(() => {

    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()
      setloading(false)
      setCharacters(data.results)
      setLastPage(data.info.pages)
    }

    fetchData()
  }, [page])

  return (
    <div className='container'>

      <Header page={page} setPage={setPage} lastPage={lastPage}/>

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
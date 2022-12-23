function Character({character}) {
    return (
        <div className="text-center p-5">
            <h2 className="fs-4">{character.name}</h2>
            <img className="img-fluid rounded-pill mb-3" src={character.image} alt={character.name} />
            <p className="py-1">Origen: {character.origin.name}</p>
            <p>Estado: {character.status}</p>
            <p>Especie: {character.species}</p>
        </div>
    )
}

export default Character
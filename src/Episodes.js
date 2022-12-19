import React, {useEffect, useState} from 'react';

export function Episodes () {
    
    const [characters, setCharacters] = useState([]);
    
    const apiUrl = "https://rickandmortyapi.com/api/episode";

    const fetchCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        fetchCharacters(apiUrl);
    }, [])
}

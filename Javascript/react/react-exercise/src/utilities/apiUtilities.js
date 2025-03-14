
const getFavorites = () => {
    return fetch('http://localhost:8080/favorites', 
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
}

const postFavorites = (favorite) => {
    return fetch('http://localhost:8080/favorites', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(favorite)
    })
    .then(response => response.json())
}

export {getFavorites, postFavorites}
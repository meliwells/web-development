import React, {useState, useEffect, createContext} from 'react';

export const FavoritesContext = createContext();
export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch('/api/favorites')
            .then(response => response.json())
            .then(data => setFavorites(data))
            .catch(error => console.log(error));
    },[])

    return (
        <FavoritesContext.Provider value={favorites} >
            {children}
        </FavoritesContext.Provider>
    )
}
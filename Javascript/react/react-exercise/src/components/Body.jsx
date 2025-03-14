import React, { useState, useEffect } from 'react';
import '../App.css';
import Favorite from './Favorite';
import { getFavorites } from '../utilities/apiUtilities.js';

export default function Body() {

    const [favorites, setFavorites] = useState([]);
    
        useEffect(() => {
          getFavorites().then((data) => {
            setFavorites(data);
          });
          
          // setFavorites([
          //   {
          //     "brand": "M&M's",
          //     "location": "New Jersey",
          //     "mostFavorite": "Plain"   
          //   },
          //   {
          //     "brand": "Ghiradelli",
          //     "location": "California",
          //     "mostFavorite": "Intense Dark 60% Cocoa" 
          //   },
          //   {
          //     "brand": "Hershey's",
          //     "location": "Pennsylvania",
          //     "mostFavorite": "Special Dark"   
          //   },
          //   {
          //     "brand": "Cadbury Dairy Milk",
          //      "location": "United Kingdom",
          //      "mostFavorite": "Oreo Chocolate Bar"   
          //   },
          //   {
          //      "brand": "Dove",
          //      "location": "Chicago",
          //      "mostFavorite": "Dark Chocolate"   
          //   }])
        }, []);

    return (
        <div>
            <ol>
                {favorites.map((favorite) => (
                    <Favorite brand={favorite.brand} mostFavorite={favorite.mostFavorite} location={favorite.location}/>
                ))}
            </ol>
        </div>
    );
}    
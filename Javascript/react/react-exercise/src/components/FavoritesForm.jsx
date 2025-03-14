import React, { useState } from 'react';
import {postFavorites} from '../utilities/apiUtilities.js';


export default function FavoritesForm() {
//1.add const for all data values, then import useState 
    const [brand, setBrand] = useState('');
    const [location, setLocation] = useState('');
    const [most_favorite, setMost_favorite] = useState('');
    const [rank, setRank] = useState('');

    const clearForm = () => {  //after adding a favorite
        setBrand('');
        setLocation('');
        setMost_favorite('');
        setRank('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

            clearForm();    
    }    


    return (
        <div>
            <h1>Favorites Form</h1>
            <form className='task-form' onSubmit={handleSubmit}>
            <div>
                <label>Brand</label>
                <input 
                value={brand} 
                type='text'
                onChange={(e) => setBrand(e.target.value)}
                />
            </div>

            <div>
            <label>Location</label>
                <input 
                value={location} 
                type='text'
                onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            <div>
            <label>Most Favorite</label>
                <input 
                value={most_favorite} 
                type='text'
                onChange={(e) => setMost_favorite(e.target.value)}
                />
            </div>

            <div>
            <label>Rating</label>
                <input 
                value={rank} 
                type='number'
                onChange={(e) => setRank(e.target.value)}
                />
            </div>

            <button onClick={handleSubmit}>Add Favorite</button>
        </form>
        </div>
    )
}


        
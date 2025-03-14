import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import FavoritesForm from './components/FavoritesForm.jsx';


export default function App() {
  const [favorites, setFavorites] = useState([]);

  return (
        <div>
          <Header/>
          <Body/>
          <FavoritesForm/>
        </div>
  );
}


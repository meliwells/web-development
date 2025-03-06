import React, { useState, useEffect } from 'react'
import '../App.css'

export default function Favorite(props) {

    return <li key={props.brand} > {props.brand}: {props.mostFavorite}: {props.location}</li>
}
import React, { useState, useEffect } from 'react'
import '../App.css'

export default function Book(props) {

    return <li key={props.title} > {props.title}: {props.author}</li>
}
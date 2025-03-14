import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { BooksContext } from '../contexts/BooksContext.jsx';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
    const { bookId } = useParams();
    const books = useContext(BooksContext);
    const book = books.find(book => book.id === parseInt(bookId));


    if (books.length === 0) {
        return <>Loading...</>
    }
    if (!book) {
        return <Navigate to={'*'}/>
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <h3>By: {book.author}</h3>
            <p>{book.description}</p>
        </div>
    );
}
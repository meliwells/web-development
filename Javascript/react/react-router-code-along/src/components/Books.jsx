import React, { useContext, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BooksContext } from '../contexts/BooksContext.jsx';


export default function Books() {
    const books = useContext(BooksContext);
    const query = new URLSearchParams(useLocation().search);
    const searchTitle = query.get('title') || '';
    const searchAuthor = query.get('author') || '';

    useEffect(() => {
        console.log(query);
    })

    let filteredBooks = books.filter((b) => b.title.toLowerCase().includes(searchTitle.toLowerCase()));
    filteredBooks = filteredBooks.filter((b) => b.author.toLowerCase().includes(searchAuthor.toLowerCase()));

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {filteredBooks.map((book) => 
                    <li key={book.id}> 
                        <Link to={'/books/' + book.id}>
                            {book.title} by {book.author}
                        </Link>
                    </li>)}
            </ul>
        </div>
    )
}

import React from 'react';
import '../App.css'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p>© {currentYear} This is my website, all rights reserved.</p>
        </footer>
    );

}
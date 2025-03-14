import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import { BooksProvider } from './contexts/BooksContext.jsx';
import {UserProvider} from './contexts/UserContext.jsx';

import Books from './components/Books.jsx';
import BookDetails from './components/BookDetails.jsx';
import Login from './components/Login.jsx';
import NotFound from './components/NotFound.jsx';
import SecuredComponent from './components/SecuredComponent.jsx';

import { SecureRoute } from './utilities/SecureRoute.jsx';


export default function App() {

  return (
    <BooksProvider>
    <UserProvider>
        <Router>
          <Link to='/'><h2>Books Website</h2></Link>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='login'>Login</Link></li>
              <li><Link to='secured'>Secured</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Books />} />
            <Route path='/books' element={<Navigate to={'/'} />}/>
            <Route path='/books/:bookId' element={<BookDetails />}/>
            <Route path='/secured' element={
              <SecureRoute component={<SecuredComponent />} />
            }/>
            <Route path='/login' element={<Login />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </Router>
    </UserProvider>  
    </BooksProvider>
  )
}



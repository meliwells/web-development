import React from 'react';
import { Navigate } from 'react-router-dom';

export const SecureRoute = ({component}) => {
    const isAuthenticated = true;
    return isAuthenticated ? component : <Navigate to='/' />
}
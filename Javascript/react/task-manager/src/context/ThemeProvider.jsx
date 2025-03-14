import ThemeContext from './ThemeContext';
import React, { useState } from 'react';

export const ThemeProvider = ({ children }) => {
    const[theme, setTheme] = useState('light');
    const toggleTheme = (e) => {
        e.preventDefault();
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return(
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
      </ThemeContext.Provider> 
    );
}
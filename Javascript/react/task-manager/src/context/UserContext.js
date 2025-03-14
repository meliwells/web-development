import { createContext } from 'react';

const userContext = createContext({
    username: 'Guest',
    isAdmin: false,
    //JWT: null,
});

export default userContext;
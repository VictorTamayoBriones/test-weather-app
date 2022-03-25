import React, {useState} from 'react';

export const UserContext = React.createContext();

export const UserProvider = ({children}) =>{

    const[currentUser, setCurrentUser]=useState({
        user: "test@gmail.com",
        pass: "test123456",
        location: 'Texas',
        activate: false
    });

    return(
        <UserContext.Provider value={{currentUser, setCurrentUser}} >
            {children}
        </UserContext.Provider>
    )
}
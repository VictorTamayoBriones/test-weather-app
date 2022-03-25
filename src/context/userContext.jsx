import React, {useState} from 'react';
import { useGetRandomUser } from '../hooks/useGetRandomUser';

export const UserContext = React.createContext();

export const UserProvider = ({children}) =>{

    const { userRandom } = useGetRandomUser()
    const[currentUser, setCurrentUser]=useState({
        user: "test@gmail.com",
        pass: "test123456",
        activate: false
    });


    return(
        <UserContext.Provider value={{currentUser, setCurrentUser, userRandom}} >
            {children}
        </UserContext.Provider>
    )
}
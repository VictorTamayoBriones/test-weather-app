import { useState, useEffect } from 'react';
import { adapterUser } from '../adaptaers/adapterRandomUser';

export const useGetRandomUser = () =>{
    const[userRandom, setUserRandom]=useState({});
    
    const getFormatUser = async ()=>{
        const formatUser = await adapterUser()
        setUserRandom(formatUser)
    }

    useEffect(()=>{
        getFormatUser()
    }, [])
    
    return {
        userRandom, setUserRandom
    }
}
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { adapterWeather } from '../adaptaers/adapterWeather';

export const useGetWeather =  () =>{

    const [locationIsActive, setLocationIsActive]=useState(false)
    const [weather, setWeather]=useState({})
    const { userRandom } = useContext(UserContext);

    const verifyLocationWeather = () =>{
        if( userRandom.locationWeather != '' ){
            setLocationIsActive(true)
        }else{
            setLocationIsActive(false)
        }
    }

    const getWeather = async () =>{
        if( locationIsActive ){
            const formatWeather = await adapterWeather(userRandom.locationWeather)
            setWeather(formatWeather)
        }else{
            verifyLocationWeather()
        }
    }

    useEffect(()=>{
        getWeather()
    },[locationIsActive])

    return weather
}


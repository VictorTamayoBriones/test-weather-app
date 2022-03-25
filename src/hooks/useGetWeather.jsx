import axios from "axios"
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { getWeather } from '../services/getWeather';

export const useGetWeather =  () =>{

    const { userRandom } = useContext(UserContext);

    const[formatWeather, setFormatWeather]=useState({});

    const apiKey = '25745ce0da2954b896c845ab208d6851';
    const city = userRandom.locationWeather;

    const weatherFormat = async ()=>{
        const format = await getWeather(apiKey, city)
        
        setFormatWeather({
            cityName: format.name,
            temp: format.main.temp,
            feels: format.main.feels_like,
            temp_max: format.main.temp_max,
            temp_min: format.main.temp_min,
            icon: format.weather[0].icon,
            desc: format.weather[0].description
        });
    }
    
    useEffect(()=>{
        weatherFormat()
    }, [])

    return {formatWeather, getWeather}
}


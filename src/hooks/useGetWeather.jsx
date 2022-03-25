import axios from "axios"
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/userContext';

export const useGetWeather =  () =>{

    const { userRandom } = useContext(UserContext);
    const[weather, setWeather]=useState({});
    const[formatWeather, setFormatWeather]=useState({});

    const apiKey = '25745ce0da2954b896c845ab208d6851';
    const city = userRandom.locationWeather;

    const getWeather = async () =>{
        const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        setWeather(res.data)
        
        setFormatWeather({
            cityName: weather.name,
            temp: weather.main.temp,
            feels: weather.main.feels_like,
            temp_max: weather.main.temp_max,
            temp_min: weather.main.temp_min,
            icon: weather.weather[0].icon,
            desc: weather.weather[0].description
        });
    }
    
    useEffect(()=>{
        getWeather();
    }, [])

    return formatWeather
}


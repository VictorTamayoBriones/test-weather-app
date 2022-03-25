import axios from "axios"
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { getWeather } from '../services/getWeather';

export const useGetWeather =  () =>{

    const { userRandom } = useContext(UserContext);

    const[weather, setWeather]=useState({})
    const[formatWeather, setFormatWeather]=useState({});

    const apiKey = 'dc5682dc88229268653b08b1d1fd5e70';
    const city = userRandom.locationWeather;
    
    const getWeather = async () =>{
        try{
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
        }catch(err){
            console.log(err.response)
        }
    }
    
    return {formatWeather, getWeather}
}


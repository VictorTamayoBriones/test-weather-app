import axios from "axios"
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const getWeather = async () =>{

    const { userRandom } = useContext(UserContext);

    const apiKey = '25745ce0da2954b896c845ab208d6851';
    const city = userRandom.locationWeather;

    const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    console.log(res.data)
    return res.data
}


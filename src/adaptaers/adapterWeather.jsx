import { getWeather } from '../services/getWeather';

export const adapterWeather = async (city) =>{
    const weather = await getWeather(city);
    const formatWeather = {
        cityName: weather.name,
        temp: weather.main.temp,
        feels: weather.main.feels_like,
        temp_max: weather.main.temp_max,
        temp_min: weather.main.temp_min,
        icon: weather.weather[0].icon,
        desc: weather.weather[0].description
    }
    return formatWeather
}
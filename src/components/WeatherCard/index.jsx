import { Card } from "../../styled-components/Card"
import { useGetWeather } from '../../hooks/useGetWeather';

export const WeatherCard = () =>{
    const weather = useGetWeather()
    return(
        <Card>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
            <h2>Weather of { weather.cityName } - { weather.desc }</h2>
            <p><span>Temp: </span>{ weather.temp } ºC</p>
            <p><span>Feels like: </span>{ weather.feels } ºC</p>
            <p><span>Temp Max: </span>{ weather.temp_max } ºC</p>
            <p><span>Temp Min: </span>{ weather.temp_min } ºC</p>
        </Card>
    )
}
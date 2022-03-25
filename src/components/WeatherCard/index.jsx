import { Card } from "../../styled-components/Card"
import { useGetWeather } from '../../hooks/useGetWeather';

export const WeatherCard = () =>{

    const formatWeather = useGetWeather()
    
    return(
        <Card>
            <img src={`http://openweathermap.org/img/wn/${formatWeather.icon}@2x.png`} alt="" />
            <h2>Weather of { formatWeather.cityName } - { formatWeather.desc }</h2>
            <p><span>Temp: </span>{ formatWeather.temp } ºC</p>
            <p><span>Feels like: </span>{ formatWeather.feels } ºC</p>
            <p><span>Temp Max: </span>{ formatWeather.temp_max } ºC</p>
            <p><span>Temp Min: </span>{ formatWeather.temp_min } ºC</p>
        </Card>
    )
}
import axios from "axios"
export const getWeather = async (apiKey, city) =>{

    const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    console.log(res.data)
    return res.data
}


import axios from "axios"
export const getWeather = async (apiKey, city) =>{

    try{
        const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        return res.data
    }catch(err){

        console.log(err.response)
    }
}


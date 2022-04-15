import axios from "axios"

export const getWeather = async (city) =>{
    
    const apiKey = 'dc5682dc88229268653b08b1d1fd5e70';

    try{
        const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        console.log('Se llamo a la apli del clima')
        return res.data
    }catch(err){
        console.log(err.response)
    }
    
}


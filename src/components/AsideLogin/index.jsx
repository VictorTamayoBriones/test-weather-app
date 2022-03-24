import { AsideLoginContainer, WeatherText, Overlay } from './style';

export const AsideLogin = () =>{
    let weatherText = []
    
    const createWeatherText = () =>{
        for (let i = 0; i < 30; i++) {
            weatherText.push(i)
        }
    }
    createWeatherText()

    return(
        <AsideLoginContainer>
            <WeatherText>
                {weatherText.map((i)=><p key={i} >Weather App</p>)}
            </WeatherText>
            <Overlay/>
        </AsideLoginContainer>
    )
}
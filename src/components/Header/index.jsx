import { HeaderContainer, WeatherText, Overlay } from './style';

export const Header = () =>{
    let weatherText = []
    
    const createWeatherText = () =>{
        for (let i = 0; i < 30; i++) {
            weatherText.push(i)
        }
    }
    createWeatherText()

    return(
        <HeaderContainer>
            <WeatherText>
                {weatherText.map((i)=><p key={i} >Weather App</p>)}
            </WeatherText>
            <Overlay/>
        </HeaderContainer>
    )
}
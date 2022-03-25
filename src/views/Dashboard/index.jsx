import { Header } from "../../components/Header"
import { UserCard } from "../../components/UserCard"
import { WeatherCard } from "../../components/WeatherCard"
import { DashboardContainer } from "./style"

export const Dashboard = () =>{
    return(
        <>
            <Header/>
            <DashboardContainer>
                <UserCard/>
                <WeatherCard/>
            </DashboardContainer>
        </>
    )
}
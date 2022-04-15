import { BtnLogout } from "../../components/BtnLogout/BtnLogout"
import { Header } from "../../components/Header"
import { UserCard } from "../../components/UserCard"
import { WeatherCard } from "../../components/WeatherCard"
import { DashboardContainer } from "./style"

export const Dashboard = () =>{
    return(
        <>
            <Header/>
            <BtnLogout/>
            <DashboardContainer>
                <UserCard/>
                <WeatherCard/>
            </DashboardContainer>
        </>
    )
}
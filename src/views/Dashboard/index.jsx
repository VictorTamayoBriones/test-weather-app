import { UserCard } from "../../components/UserCard"
import { WeatherCard } from "../../components/WeatherCard"
import { DashboardContainer } from "./style"

export const Dashboard = () =>{
    return(
        <DashboardContainer>
            <UserCard/>
            <WeatherCard/>
        </DashboardContainer>
    )
}
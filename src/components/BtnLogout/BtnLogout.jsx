import { Button } from "../WeatherCard/style"
import { useContext } from "react"
import { UserContext } from '../../context/userContext';
import { useNavigate } from "react-router-dom";

export const BtnLogout = () =>{
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const handleClick = ()=>{
        setCurrentUser({...currentUser, activate: false})
        navigate('/')
    }

    return(
        <Button onClick={handleClick} >Logout</Button>
    )
}
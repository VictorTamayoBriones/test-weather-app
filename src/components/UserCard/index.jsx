import { Card } from "../../styled-components/Card"
import { useContext } from 'react';
import { UserContext } from '../../context/userContext'

export const UserCard = () =>{
    
    const { currentUser, userRandom } = useContext(UserContext);
    
    return(
        <Card>
            <img src={ userRandom.photo } alt={ userRandom.name } />
            <h2>{ userRandom.name }</h2>
            <p><span>Cell: </span> { userRandom.cell }</p>
            <p><span>Gender: </span> { userRandom.gender }</p>
            <p><span>Email: </span> { currentUser.user }</p>
            <p><span>Location: </span> { userRandom.location }</p>
        </Card>
    )
}
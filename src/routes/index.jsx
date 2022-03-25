import { Routes, Route, useNavigate } from 'react-router-dom';
import { Dashboard } from '../views/Dashboard';
import { Login } from '../views/Login';
import { Logup } from '../views/Logup';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const AppRoutes = ()=>{

    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);

    return(
        <Routes>
            <Route path='/' element={ <Login/> } />
            <Route path='/logup' element={ <Logup/> } />
            <Route path='/dashboard' element={ currentUser.activate ? <Dashboard/> : <Login/>} />
        </Routes>
    )
}
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../views/Dashboard';
import { Login } from '../views/Login';
import { Logout } from '../views/Logout';

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={ <Login/> } />
            <Route path='/logout' element={ <Logout/> } />
            <Route path='/dashboard' element={ <Dashboard/> } />
        </Routes>
    )
}
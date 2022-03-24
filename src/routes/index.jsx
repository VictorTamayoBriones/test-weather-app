import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../views/Dashboard';
import { Login } from '../views/Login';
import { Logup } from '../views/Logup';

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={ <Login/> } />
            <Route path='/logup' element={ <Logup/> } />
            <Route path='/dashboard' element={ <Dashboard/> } />
        </Routes>
    )
}
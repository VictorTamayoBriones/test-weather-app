import { useState, useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

export const useLogin = () =>{

    const { currentUser, setCurrentUser }=useContext(UserContext);
    const navigate = useNavigate();

    const[user, setUser]=useState('');
    const[pass, setPass]=useState('');
    const[err, setErr]=useState({
        user:{
            errStateUser: false,
            errTextUser: ''
        },
        pass:{
            errStatePass: false,
            errTextPass: ''
        }
    });

    const handleChange = ({target: {name, value}}) =>{
        if( name === 'user' ){
            setUser(value)
        }else if( name === 'pass' ){
            setPass(value)
        }
    }

    const verifyUser = ()=>{
        if( user != '' && pass != '' ){
            if( user === currentUser.user && pass === currentUser.pass ){
                console.log('Perfect man')
                setCurrentUser({
                    ...currentUser,activate:true
                })
                navigate('/dashboard')
                setUser('')
                setPass('')
            }else if( user != currentUser.user ){
                setErr({...err, user:{errStateUser: true, errTextUser: 'user is not correct'}})
            }else if( pass != currentUser.pass ){
                setErr({...err, pass:{errStatePass: true, errTextPass: 'password is not correct'}})
            }else if( user != currentUser.user && pass != currentUser.pass ){
                setErr({...err, user:{errStateUser: true, errTextUser: 'user is not correct'}})
                setErr({...err, pass:{errStatePass: true, errTextPass: 'password is not correct'}})
            }

        }else if( user === '' && pass === '' ){
            setErr({
                user:{
                    errStateUser: true,
                    errTextUser: 'You need to complete'
                },
                pass:{
                    errStatePass: true,
                    errTextPass: 'You need to complete'
                }
            })
        }else if( user === '' ){
            setErr({...err, user:{errStateUser: true, errTextUser: 'You need to complete'}})            
        }else if( pass === '' ){
            setErr({...err, pass:{errStatePass: true, errTextPass: 'You need to complete'}})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        verifyUser();
    }

    return{
        user,
        pass,
        handleChange,
        handleSubmit,
        err
    }
    
}
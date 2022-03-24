import { useState, useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

export const useLogup = () =>{

    const {currentUser, setCurrentUser}=useContext(UserContext);
    const navigate = useNavigate();

    const[user, setUser]=useState('');
    const[pass, setPass]=useState('');
    const[repeatPass, setRepeatPass]=useState('');
    const[birthDate, setBirthDate]=useState('');
    const[err, setErr]=useState({
        user:{
            errStateUser: false,
            errTextUser: ''
        },
        pass:{
            errStatePass: false,
            errTextPass: ''
        },
        repeatPass:{
            errStateRepeat: false,
            errTextRepeat: ''
        },
        birthDate:{
            errStateBirth: false,
            errTextBirth: ''
        }
    });

    const handleChange = ({target: {name, value}}) =>{
        if( name === 'user' ){
            setUser(value)
        }else if( name === 'pass' ){
            setPass(value)
        }else if( name === 'repeatPass' ){
            setRepeatPass(value)
        }else if( name === 'birth' ){
            setBirthDate(value)
        }
    }

    const verifyNewUser = ()=>{
        if( user != '' && pass != '' && repeatPass != '' && birthDate != '' ){
            
            if( pass === repeatPass ){
                setCurrentUser({
                    user,
                    pass,
                    birthDate
                })
                console.log('User Created Succesfully')
                navigate('/')
                setUser('')
                setPass('')
                setRepeatPass('')
                setBirthDate('')
            }

        }else if( user === '' && pass === '' && repeatPass === '' && birthDate === '' ){
            setErr({
                user:{
                    errStateUser: true,
                    errTextUser: 'You need to complete'
                },
                pass:{
                    errStatePass: true,
                    errTextPass: 'You need to complete'
                },
                repeatPass:{
                    errStateRepeat: true,
                    errTextRepeat: 'You need to complete'
                },
                birthDate:{
                    errStateBirth: true,
                    errTextBirth: 'You need to complete'
                }
            })
        }else if( user === '' ){
            setErr({...err, user:{errStateUser: true, errTextUser: 'You need to complete'}})
        }else if( pass === '' ){
            setErr({...err, pass:{errStatePass: true, errTextPass: 'You need to complete'}})
        }else if( repeatPass === '' ){
            setErr({...err, repeatPass:{errStateRepeat: true, errTextRepeat: 'You need to complete'}})
        }else if( birthDate === '' ){
            setErr({...err, birthDate:{errStateBirth: true, errTextBirth: 'You need to complete'}})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        verifyNewUser();
    }

    return{
        user,
        pass,
        repeatPass,
        birthDate,
        handleChange,
        handleSubmit,
        err
    }
    
}
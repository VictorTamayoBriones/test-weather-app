import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogup = () =>{

    const navigate = useNavigate();

    const[user, setUser]=useState('');
    const[pass, setPass]=useState('');
    const[repatPass, setRepeatPass]=useState('');
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

    const[userCreated, setUserCreated]=useState({});

    const handleChange = ({target: {name, value}}) =>{
        if( name === 'user' ){
            setUser(value)
        }else if( name === 'pass' ){
            setPass(value)
        }else if( name === 'repeatPass' ){
            setRepeatPass(value)
        }else if( name === 'birthDate' ){
            setBirthDate(value)
        }
    }

    const verifyNewUser = ()=>{
        if( user != '' && pass != '' && repatPass != '' && birthDate != '' ){
            if( user === currentUser.user && pass === currentUser.pass ){
                console.log('User Created Succesfully')
                navigate('/dashboard')
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
        }else if( repatPass === '' ){
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
        handleChange,
        handleSubmit,
        err
    }
    
}
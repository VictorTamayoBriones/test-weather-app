import { AsideLogin } from "../../components/AsideLogin"
import { LoginPage, LoginForm } from './style';
import { MainTitle } from '../../styled-components/MainTitle';
import { Button } from '../../styled-components/Button';
import { useLogin } from '../../hooks/useLogin';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';

export const Login  = () =>{

    const { user, pass, handleChange, handleSubmit, err:{user:{errStateUser, errTextUser}, pass:{errStatePass, errTextPass}} } = useLogin();

    return(
        <LoginPage>
            <AsideLogin/>
            <LoginForm onSubmit={ handleSubmit } >
                <MainTitle>Weather App</MainTitle>
                <Input label="Users" type="text" placeholder="Example: test-user" name="user" value={ user } onChange={ handleChange } errText={ errStateUser ? errTextUser : '' } />
                <Input label="Password" type="password" placeholder="Password..." name="pass" value={ pass } onChange={ handleChange }  errText={ errStatePass ? errTextPass : '' } />
                <Button>Login</Button>
                <Link to="/logup" >You don't have account?, sign up here</Link>               
            </LoginForm>
        </LoginPage>
    )
}
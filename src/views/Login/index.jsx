import { AsideLogin } from "../../components/AsideLogin"
import { LoginPage, LoginForm } from './style';
import { MainTitle } from '../../styled-components/MainTitle';
import { Button } from '../../styled-components/Button';

export const Login  = () =>{
    return(
        <LoginPage>
            <AsideLogin/>
            <LoginForm>
                <MainTitle>Weather App</MainTitle>
                <Button>Login</Button>
            </LoginForm>
        </LoginPage>
    )
}
import { AsideLogin } from '../../components/AsideLogin';
import { LoginPage, LoginForm, InputsContainer } from './style';
import { MainTitle } from '../../styled-components/MainTitle';
import { Button } from '../../styled-components/Button';
import { useLogup } from '../../hooks/useLogup';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';

export const Logup = () =>{

    const { user, pass, repeatPass, birthDate, handleChange, handleSubmit, err:{user:{errStateUser, errTextUser}, pass:{errStatePass, errTextPass}} } = useLogup();

    return (
        <LoginPage>
            <AsideLogin/>
            <LoginForm onSubmit={ handleSubmit } >
                <MainTitle>Sign Up Here!</MainTitle>
                <InputsContainer>
                    <Input label="Email" type="email" placeholder="Example: test@gail.com" name="user" value={ user } onChange={ handleChange } errText={ errStateUser ? errTextUser : '' } />
                    <Input label="Password" type="password" placeholder="Password..." name="pass" value={ pass } onChange={ handleChange }  errText={ errStatePass ? errTextPass : '' } />
                    <Input label="Confirm Password" type="password" placeholder="Confirn Password..." name="repeatPass" value={ repeatPass } onChange={ handleChange }  errText={ errStatePass ? errTextPass : '' } />
                    <Input label="Date of birth" type="text" placeholder="Example: 24/03/2022" name="birth" value={ birthDate } onChange={ handleChange }  errText={ errStatePass ? errTextPass : '' } />
                </InputsContainer>
                <Button>Sing UP</Button>
                <Link to="/" >You have account?</Link>               
            </LoginForm>
        </LoginPage>
    )
}
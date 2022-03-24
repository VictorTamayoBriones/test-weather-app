import styled from 'styled-components';

export const LoginPage = styled.div`
    width: 100%;
    display: flex;
`;

export const LoginForm = styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    transform: translateY(50px);
    @media(max-width: 552px){
        width: 100%;
        h1{
            font-size: 60px;
        }
        button{
            width: 70%;
        }
    }
`;
import styled from 'styled-components';

export const LoginPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const LoginForm = styled.form`
    width: 70%;
    height: 100vh;
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

export const InputsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    div{
        &:nth-child(1), &:nth-child(4){
            width: 100%;
        }
        &:nth-child(2), &:nth-child(3){
            width: 45%;
        }
    }

    @media(max-width: 740px){
        div{
            &:nth-child(2), &:nth-child(3){
                width: 100%;
            }
        }
    }
`;
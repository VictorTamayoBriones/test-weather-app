import styled from 'styled-components';
import { theme } from '../../theme';

export const InputBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    label{
        color: ${ theme.verde };
        font-size: 22px;
    }
    input{
        font-size: 18px;
        font-weight: 200;
        padding: 5px;
        outline: none;
        border: solid 1px ${ theme.gris };
        border-radius: 3px;
        &:focus{
            border: solid 1px ${ theme.verde };
        }
    }
    p{
        color: red;
    }
    @media(max-width: 552px){
        width: 85%;
    }
`;
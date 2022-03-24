import styled from 'styled-components';
import { theme } from '../../theme';

export const Button = styled.button`
    width: 50%;
    border: solid 1px ${ theme.azul };
    border-radius: 3px;
    color: ${ theme.azul };
    background: transparent;
    font-size: 16px;
    padding: 5px 0px;
    cursor: pointer;
    transition: .3s;
    &:hover{
        background: ${ theme.azul };
        color: ${ theme.blanco };
    }
`
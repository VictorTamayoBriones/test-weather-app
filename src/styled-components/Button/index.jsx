import styled from 'styled-components';
import { theme } from '../../theme';

export const Button = styled.button`
    width: 50%;
    border: solid 1px ${ theme.verde };
    border-radius: 3px;
    color: ${ theme.verde };
    background: transparent;
    font-size: 16px;
    padding: 5px 0px;
    cursor: pointer;
    transition: .3s;
    &:hover{
        background: ${ theme.verde };
        color: ${ theme.blanco };
    }
`
import styled from 'styled-components';
import { theme } from '../../theme';

export const Button = styled.button`
    background: ${ theme.azul };
    color: ${ theme.blanco };
    padding: 5px 12px;
    border: none;
    border-radius: 5px;
    margin-top: 12px;
    position: absolute;
    right: 50px;
    cursor: pointer;
    &:hover{
        background: ${ theme.naranja };
    }
`;
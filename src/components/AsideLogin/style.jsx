import styled from 'styled-components';
import { theme } from '../../theme';

export const AsideLoginContainer = styled.aside`
    width: 30%;
    height: 100vh;
    background: ${ theme.azul };
    color: transparent;
    overflow: hidden;
    font-size: 53px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    letter-spacing: 5px;
    box-shadow: 2px 0px 9px rgba(0, 0, 0, 0.5);
    position: relative;
    p{
        display: inline-block;
        &:nth-child(even){
            -webkit-text-stroke: 1px ${ theme.naranja };
        }
    }
    -webkit-text-stroke: 1px ${ theme.blanco };
    @media(max-width: 552px){
        display: none;
    }
`

export const WeatherText = styled.div`
    width: calc(100% + 18%);
    position: relative;
    z-index: 1;
    @media(max-width: 1200px){
        p{
            font-size: 50px;
        }
    }

    @media(max-width: 670px){
        p{
            font-size: 40px;
        }
    }
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background: rgba(0, 0, 0, 0.05);
    z-index: 2;
    top: 0;
`
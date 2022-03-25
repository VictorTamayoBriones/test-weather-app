import styled from 'styled-components';
import { theme } from '../../theme';

export const Card = styled.div`
    width: 40%;
    height: max-content;
    border-radius: 5px;
    padding: 12px;
    margin: 50px;
    box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 15px;
    img{
        width: 30%;
        margin: auto;
        border-radius: 50%;
    }
    span{
        color: ${ theme.azul };
        font-weight: 700;
        letter-spacing: .5px;
    }
`;
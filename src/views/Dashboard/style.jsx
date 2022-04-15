import styled from 'styled-components';

export const DashboardContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    @media (max-width: 700px){
        flex-direction: column;
        align-items: center;
    }
`;
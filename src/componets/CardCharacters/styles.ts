import styled from 'styled-components';

export const MainContainer = styled.div`
     width: 100%;
     justify-content: center;
     height: auto;
     display: flex;
     flex-flow: row wrap;
     margin-top: 7rem;
     margin-bottom: 5rem;
     align-items: center;
     flex-wrap: wrap;
     gap: 2rem;
`;

export const MainContainerDetail = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column wrap;
    margin-top: 5rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const StatusCHaracter = styled.span`
     width: 10px;
     height: 10px;
     border-radius: 50%;
     margin-right: 5px;
`;

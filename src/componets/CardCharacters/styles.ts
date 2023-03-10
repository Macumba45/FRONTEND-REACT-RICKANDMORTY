import styled from 'styled-components';


export const MainContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    margin-top: 5rem;
    margin-bottom: 5rem;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    @media screen and (max-width: 768px) {
        margin-top: 15rem;
        justify-content: center;
    }
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
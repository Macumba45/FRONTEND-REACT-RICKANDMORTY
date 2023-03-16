import styled from 'styled-components';
import {List} from '@mui/material';

export const MainContainer = styled.div`
     display: flex;
     margin-top: 5rem;
     flex-direction: column;
     flex-wrap: wrap;
     margin-bottom: 5rem;
     margin-left: 2rem;

     @media screen and (min-width: 600px) {
          /* justify-content: center; */
     }
`;

export const MainContainerLoader = styled.div`
     display: flex;
     margin-top: 5rem;
     justify-content: center;
     margin-bottom: 5rem;

     @media screen and (min-width: 600px) {
          /* justify-content: center; */
     }
`;

export const StyledList = styled(List)`
     width: 100%;
     width: 400px;
     background-color: white;

     @media screen and (min-width: 600px) {
          width: 100%;
          height: 100px;
     }
`;

export const ImgList = styled.img`
     width: 100%;
     height: auto;
`;

export const EpisodeBold = styled.span`
     font-weight: 800;
     color: #69c8ecff;
`;

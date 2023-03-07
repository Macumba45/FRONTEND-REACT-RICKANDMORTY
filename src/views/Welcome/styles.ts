import styled from 'styled-components';
import welcomeMobile from './assets/rick-and-morty-hd-jh-1080x1920.jpg';
import welcomeDesktop from './assets/812062.png';

export const MainContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
     flex-direction: column;
`;

export const MainContainerButton = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
     flex-direction: column;
     height: 100vh;
`;

export const BackgroundWelcome = styled.div`
     background-image: url(${welcomeMobile});
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center center;
     width: 100%;
     height: 100vh;

     @media screen and (min-width: 600px) {
          background-image: url(${welcomeDesktop});
     }
`;

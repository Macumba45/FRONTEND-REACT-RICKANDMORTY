import styled from 'styled-components';
import { ReactComponent as DefaultMenuIcon } from '../../assets/icons/ellipsis-solid.svg';
import { ReactComponent as DefaultCircleDead } from '../../assets/icons/circle-solid.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart-regular.svg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const MainContainer = styled.div`
     align-items: center;
     display: flex;
     flex-flow: row;
     gap: 2rem;
     height: auto;
     justify-content: center;
     margin-bottom: 5rem;
     margin-top: 3rem;
     padding: auto 0;
     width: 70%;
     transform: scale(1);
     transition: all 0.6s ease-in-out;
     @media (min-width: 389px) {
          width: 66.5%;
          margin-top: -1rem;
          &:hover {
               transform: scale(1);
          }
     }
     @media (min-width: 400px) {
          width: 63.5%;
          margin-top: 3rem;
     }
     @media (min-width: 768px) {
          width: 33.9%;
          margin-top: 3rem;
     }
     @media (min-width: 820px) {
          width: 31.9%;
          margin-top: 3rem;
     }
     @media (min-width: 1024px) {
          width: 23.9%;
          margin-top: 3rem;
     }
     &:hover {
          cursor: pointer;
          // transform: scale(1.05);
          transition: all 0.6s ease-in-out;
          margin: 0 2rem;
          position: relative;
          top: -30px;
     }
`;

export const CustomCard = styled.div`
     -moz-box-shadow: 0 0 17px -0.5px #69c8ec;
     -webkit-box-shadow: 0 0 17px -0.5px #69c8ec;
     align-items: center;
     border-radius: 10px;
     box-shadow: 0 0 17px -0.5px #69c8ec;
     display: flex;
     flex-wrap: wrap;
     height: 100%;
     justify-content: space-around;
     padding: 0 0.5rem;
     text-align: center;
     width: 400px;
     font-family: ${({ theme }) => theme.fonts.primary};
     
`;
export const SubContainerGeneral = styled.div`
     align-items: center;
     display: flex;
     flex-flow: column;
     justify-content: center;
     text-align: center;
     width: 100%;
`;
export const SubContainerSubGeneral = styled.div`
     align-items: center;
     display: flex;
     flex-flow: row;
     justify-content: center;
     text-align: center;
     margin-top: 1.5rem;
     margin-bottom: 2rem;
     width: 100%;
`;
export const SubContainerInfo = styled.div`
     align-items: center;
     display: flex;
     flex-direction: column;
     height: 30%;
     justify-content: center;
     text-align: center;
     width: 100%;
`;

export const IconsContainer = styled.div`
     align-items: center;
     display: flex;
     flex-flow: row wrap;
     height: 5rem;
     justify-content: space-evenly;
     text-align: center;
     width: 100%;
`;

export const TypographyContainer = styled.div`
     display: flex;
     flex-flow: row;
     text-align: center;
     width: 100%;
`;

export const ImgContainer = styled.div`
     align-items: center;
     background-image: url('../assets/wp6507378.jpg');
     display: flex;
     flex-flow: row wrap;
     justify-content: center;
     width: 100%;
`;

export const FavIconContainer = styled.div`
     align-items: center;
     display: flex;
     flex-flow: row wrap;
     justify-content: center;
     width: 40%;
     height: 2rem;
`;

export const FavIcon = styled(HeartIcon) <{ $isFav: Boolean }>`
     align-items: center;
     display: flex;
     flex-flow: row wrap;
     justify-content: center;
     width: 50%;
     ${({ $isFav, theme }) =>
          $isFav
               ? `fill: ${theme.colors.danger};`
               : `fill: ${theme.colors.tertiary};`}
     display: flex;
`;

export const Typography = styled.div`
     align-items: center;
     display: flex;
     flex-flow: row wrap;
     justify-content: center;
     width: 100%;
  
`;

export const Link = styled.a`
     text-align: center;
`;

export const StatusCharacter = styled(DefaultCircleDead) <{ $isDead: String }>`
     ${({ $isDead, theme }) =>
          $isDead !== 'Alive'
               ? `fill: ${theme.colors.danger};`
               : `fill: ${theme.colors.quaternary};`}
     display: flex;
     flex-flow: row wrap;
     height: 10px;
     width: 10px;
     z-index: 100;
`;
export const CustomImg = styled.img`
     background-repeat: no-repeat;
     background-size: 100% 100%;
     background-size: cover;
     background: url(../img/imagen.jpg);
     height: 279px;
     width: 279px;
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

export const MainContainerLoader = styled.div`
     display: flex;
     margin-top: 5rem;
     justify-content: center;
     margin-bottom: 5rem;

     @media screen and (min-width: 600px) {
          /* justify-content: center; */
     }
`;
export const MoreButton = styled(DefaultMenuIcon)`
     width: 20px;
     cursor: pointer;
     fill: ${({ theme }) => theme.colors.tertiary};
`;

export const CreateButton = styled(AddCircleIcon)`
     color: ${({ theme }) => theme.colors.tertiary};
     cursor: pointer;
`;

export const DeleteButton = styled(DeleteIcon)`
     color: ${({ theme }) => theme.colors.tertiary};
     cursor: pointer;
`;

export const EditButton = styled(EditIcon)`
     color: ${({ theme }) => theme.colors.tertiary};
     cursor: pointer;
`;

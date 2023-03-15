import styled from 'styled-components';
import { ReactComponent as DefaultMenuIcon } from '../../assets/icons/ellipsis-solid.svg';
import { ReactComponent as DefaultCircleDead } from '../../assets/icons/circle-solid.svg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const MainContainer = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    flex-wrap: wrap;
    gap: 2rem;
    height: auto;
    justify-content: center;
    margin-bottom: 5rem;
    margin-top: 7rem;
    width: 100%;
`;

export const CustomCard = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    height: 15rem;
    width: 70%;
    text-align: center;
    padding: .5rem;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 17px -0.5px #69c8ec;
    -moz-box-shadow: 0 0 17px -0.5px #69c8ec;
    box-shadow: 0 0 17px -0.5px #69c8ec;
`;
export const SubContainerGeneral = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
`;
export const SubContainerSubGeneral = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-top: 5rem;
`;
export const SubContainerInfo = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 30%;
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 20rem;
    margin-top: 2rem;
`;

export const TypographyContainer = styled.div`
    display: flex;
    flex-flow: row;
    text-align: center;
    width: 100%;
`;

export const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/wp6507378.jpg');
`;

export const FavIconContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

export const FavIcon = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

export const Typography = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

export const Link = styled.a`
    text-align: center;
`;

export const StatusCharacter = styled(DefaultCircleDead)<{$isDead: Boolean}>`
    display: flex;
    flex-flow: row wrap;
    width: 10px;
    height: 10px;
    z-index: 100;
    ${({$isDead, theme}) => ($isDead? `fill: ${theme.colors.danger};` : `fill: ${theme.colors.danger};`)}
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
     fill: ${({theme}) => theme.colors.tertiary};
`;

export const CreateButton = styled(AddCircleIcon)`
     color: ${({theme}) => theme.colors.tertiary};
     cursor: pointer;
`;

export const DeleteButton = styled(DeleteIcon)`
     color: ${({theme}) => theme.colors.tertiary};
     cursor: pointer;
`;

export const EditButton = styled(EditIcon)`
     color: ${({theme}) => theme.colors.tertiary};
     cursor: pointer;
`;
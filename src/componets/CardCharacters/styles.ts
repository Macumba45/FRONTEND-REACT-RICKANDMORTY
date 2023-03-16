import styled from 'styled-components';
import {ReactComponent as DefaultMenuIcon} from '../../assets/icons/ellipsis-solid.svg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/joy/Box';
import Modal from '@mui/material/Modal';

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

export const MainContainerLoader = styled.div`
     display: flex;
     margin-top: 5rem;
     justify-content: center;
     margin-bottom: 5rem;

     @media screen and (min-width: 600px) {
          /* justify-content: center; */
     }
`;

export const ModalBox = styled(Box)`
     background-color: white;
`;
export const CustomModal = styled(Modal)`
     width: 50%;
     background-color: white;
`;
export const MoreButton = styled(DefaultMenuIcon)`
     width: 20px;
     cursor: pointer;
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

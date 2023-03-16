import styled from 'styled-components';
import {Form as DefaultForm, Field as DefaultField} from 'formik';

export const MainContainer = styled.div`
     width: 100%;
     height: auto;
     display: flex;
     flex-flow: column wrap;
     align-items: center;
     text-align: center;
     margin-top: 7rem;
     gap: 2rem;
`;

export const FormContainer = styled(DefaultForm)`
     width: 100%;
     height: 26rem;
     display: flex;
     flex-flow: column;
     align-items: center;
     justify-content: space-around;
     margin-bottom: 5rem;
     flex-wrap: wrap;
     gap: 2rem;
`;

export const CustomField = styled(DefaultField)`
     width: 100%;
     display: flex;
     flex-flow: column wrap;
     align-items: center;
     justify-content: center;
`;

export const InputContainer = styled.div`
     width: 100%;
     height: 5rem;
     display: flex;
     flex-flow: column wrap;
     align-items: center;
     justify-content: space-around;
`;

export const CustomLabel = styled.label`
    width: 100%;
    height: 50%;
    text align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color:  ${({theme}) => theme.colors.tertiary};
`;
export const CustomButton = styled.button`
     border: none;
     padding: 1rem;
     font-weight: ${({theme}) => theme.fontWeights.mediumSemiBold};
     background-color: ${({theme}) => theme.colors.tertiary};
     color: ${({theme}) => theme.colors.light};
     &:hover {
          background-color: ${({theme}) => theme.colors.light};
          color: ${({theme}) => theme.colors.tertiary};
          cursor: pointer;
          transition: all 0.3s ease-in-out;
     }
`;
export const CustomInput = styled.input`
     background: ${({theme}) => theme.colors.tertiary};
     height: 2rem;
     border-radius: 0.5rem;
     border: 0;
     padding-left: 1rem;
     color: ${({theme}) => theme.colors.light};
     font-size: 1rem;
     &:focus {
          background: ${({theme}) => theme.colors.light};
          color: ${({theme}) => theme.colors.tertiary};
          transition: all 0.75s ease-in-out;
     }
`;

export const FormTitle = styled.h1`
    width: 100%;
    text align: center;
    font-size: 2rem;
    font-weight: bold;
    color:  ${({theme}) => theme.colors.tertiary};
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

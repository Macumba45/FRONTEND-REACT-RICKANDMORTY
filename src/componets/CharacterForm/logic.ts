import {useCallback, useState, useEffect} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {getAuthenticatedToken} from '../../services/storage';
import DefaultImg from '../../assets/wp6507378.jpg';

const useLogic = () => {
     const BASE_URL = 'http://localhost:8000/characters';
     const {id} = useParams();
     const navigate = useNavigate();
     const handleSubmitEdit = useCallback(
          async (values: {name: string; status: string; species: string}) => {
               const token = getAuthenticatedToken();
               const response = await fetch(`${BASE_URL}/${id}`, {
                    method: 'PUT',
                    headers: {
                         'Content-Type': 'application/json',
                         Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(values),
               });
               await response.json();
               navigate('/characters');
          },
          [id, navigate]
     );
     const handleSubmitCreate = useCallback(
          async (values: {name: string; status: string; species: string}) => {
               const randomCharacterId = Math.floor(
                    Math.random() * (1000 - 821) + 821
               );
               const token = getAuthenticatedToken();
               const response = await fetch(`${BASE_URL}`, {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                         Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                         ...values,
                         character_id: randomCharacterId,
                         image: DefaultImg,
                    }),
               });
               console.log(await response.json());
               navigate('/characters');
          },
          [navigate]
     );
     return {
          handleSubmitEdit,
          handleSubmitCreate,
     };
};
export default useLogic;

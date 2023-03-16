import {useCallback, useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {getAuthenticatedToken} from '../../services/storage';

const useLogic = () => {
     const [isForEdit, setIsForEdit] = useState(false);
     const {id} = useParams();
     const navigate = useNavigate();
     const location = useLocation();
     const handleSubmit = useCallback(
          async (values: {name: string; status: string; species: string}) => {
               const fecthMethod = isForEdit ? 'PUT' : 'POST';
               const token = getAuthenticatedToken();
               const response = await fetch(
                    `http://localhost:8000/characters/${id}`,
                    {
                         method: fecthMethod,
                         headers: {
                              'Content-Type': 'application/json',
                              Authorization: `Bearer ${token}`,
                         },
                         body: JSON.stringify(values),
                    }
               );
               await response.json();
               navigate('/characters');
          },
          [id, isForEdit, navigate]
     );
     return {
          isForEdit,
          handleSubmit,
     };
};
export default useLogic;

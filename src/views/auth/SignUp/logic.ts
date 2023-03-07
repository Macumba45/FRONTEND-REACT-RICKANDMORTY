import {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {hadledSubmitSignup} from '../../../services/api/auth';
import {setAuthenticatedToken} from '../../../services/storage';
import {SignUpProps} from './type';

const useLogic = () => {
     const navigate = useNavigate();

     const handleSubmit = useCallback(
          async (values: SignUpProps) => {
               try {
                    const response: Response = await hadledSubmitSignup(values);

                    if (response.ok) {
                         const data = await response.json();
                         setAuthenticatedToken(data);
                         navigate('/welcome');
                    }
               } catch (error: any) {
                    console.log(error);
               }
          },
          [navigate]
     );

     return {
          handleSubmit,
     };
};
export default useLogic;

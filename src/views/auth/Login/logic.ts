import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handledSubmitLogin } from '../../../services/api/auth';
import { setAuthenticatedToken } from '../../../services/storage';
import { LoginProps } from './type';

const useLogic = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = useCallback(
        async (values: LoginProps): Promise<void> => {
            try {
                const response: Response = await handledSubmitLogin(values);

                if (response.ok) {
                    const data = await response.json();
                    setAuthenticatedToken(data);
                    navigate('/welcome');
                }
                if (response.status === 500) {
                    const error = await response.json();
                    setError(error);
                }
            } catch (error: any) {
                console.log(error);
            }
        },
        [navigate]
    );

    return {
        error,
        handleSubmit,
    };
};
export default useLogic;

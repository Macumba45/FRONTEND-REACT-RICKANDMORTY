import {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const useLogic = () => {
     const [isLoading, setIsLoading] = useState(false);
     const navigate = useNavigate();
     const handleClick = () => {
          setIsLoading(true);
          setTimeout(() => {
               navigate('/characters');
          }, 2000);
          // Aquí iría el código para hacer la petición al servidor
     };

     return {
          handleClick,
          isLoading,
     };
};
export default useLogic;

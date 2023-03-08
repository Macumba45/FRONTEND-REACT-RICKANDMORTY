import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllData } from '../../services/api/fetchDataBase';

const useLogic = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const syncApi = useCallback(async () => {

        const data = await fetchAllData();
        console.log(data);


    }, [])

    const handleClick = async () => {
        setIsLoading(true);
        console.log('cargando datos')
        await syncApi()
        console.log('datos cargados')
        setTimeout(() => {
            navigate('/characters');
        }, 0);
        // Aquí iría el código para hacer la petición al servidor
    };

    return {
        handleClick,
        isLoading,
    };
};
export default useLogic;

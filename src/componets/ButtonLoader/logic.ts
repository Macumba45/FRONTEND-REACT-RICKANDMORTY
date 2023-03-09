import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllData } from '../../services/api/fetchDataBase';

const useLogic = () => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const syncApi = useCallback(async () => {
        setIsLoading(true);
        const apiData = await fetchAllData();
        window.localStorage.setItem('isSync', JSON.stringify(apiData));
        setIsLoading(false);
    }, []);

    const handleClick = async () => {
        setIsLoading(true);
        const apiData = window.localStorage.getItem('isSync');
        if (!apiData) {
            await syncApi();
        }
        setIsLoading(false);
        navigate('/characters');
    };

    return {
        handleClick,
        isLoading,

    };
};
export default useLogic;

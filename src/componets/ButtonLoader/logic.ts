import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllData } from '../../services/api/fetchDataBase';

const useLogic = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<string[]>([]);
    console.log(data)

    const navigate = useNavigate();

    const syncApi = useCallback(async () => {
        setIsLoading(true);
        const apiData = await fetchAllData();
        setData(apiData);
        setIsLoading(false);
    }, []);

    const handleClick = async () => {
        setIsLoading(true);
        if (data?.length === 0) {
            await syncApi();
        }
        setIsLoading(false);
        navigate('/characters');
    };

    return {
        handleClick,
        isLoading,
        data
    };
};
export default useLogic;

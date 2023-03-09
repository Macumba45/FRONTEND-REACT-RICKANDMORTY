import { useCallback, useState } from 'react';
import { fetchAllData } from '../../services/api/fetchDataBase';

const useLogic = () => {

    const [data, setData] = useState<string[]>([]);

    const syncApi = useCallback(async () => {
        if (data?.length === 0) { // Verifica si ya hay datos en el estado de data
            const api = await fetchAllData();
            if (api) {
                setData(api);
            }
        }
    }, [data]);

    return { data, syncApi };
};
export default useLogic;

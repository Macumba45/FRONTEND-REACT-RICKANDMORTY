import { useCallback, useState } from 'react';
import { fetchAllData } from '../../services/api/fetchDataBase';

const useLogic = () => {

    const syncApi = useCallback(async () => {

        const data = await fetchAllData();
        console.log(data);


    }, [])

    return { syncApi };
};
export default useLogic;

import { FC, memo, useCallback, useEffect, useState } from 'react';
import { fetchUserInfo } from '../../services/api/user';
import { getAuthenticatedToken } from '../../services/storage';


const useLogicProfile = () => {

    const [userData, setUserData] = useState<{
        id: string;
        email: string;
        name: string;
    } | null>(null);


    const showFavs = useCallback(async () => {
        
        console.log('showFavs');
    }, [])



    const userInfo = useCallback(async () => {
        getAuthenticatedToken(); // Obtener el token de localStorage
        const response = await fetchUserInfo()
        const data = await response.json();
        setUserData(data);
    }, []);

    useEffect(() => {

        userInfo()

    }, [userInfo])




    return {
        userData,
        showFavs


    }
}


export default useLogicProfile;
import { VariantProp } from '@mui/joy';
import { useCallback, useEffect, useState } from 'react';
import { CharacterResponse } from '../../services/api/characters';
import { fetchUserFavs, fetchUserInfo, postUserFavs } from '../../services/api/user';
import { getAuthenticatedToken } from '../../services/storage';

const useLogicProfile = () => {
    const [fav, setFav] = useState<CharacterResponse[]>([]);
    const [favs, setFavs] = useState<string[]>([]);
    const [showFavs, setShowFavs] = useState(false);
    const [userData, setUserData] = useState<{
        id: string;
        email: string;
        name: string;
    } | null>(null);
    const [loading, setLoading] = useState(false);
    const [variant] = useState<VariantProp>('soft');


    const handleShowFavs = useCallback(async (id: string) => {
        const favs = await fetchUserFavs(id);
        setFav(favs);
        setShowFavs(true);

    }, []);

    const toggleShowFavs = useCallback(async (id: string) => {
        if (showFavs) {
            setShowFavs(false);
        } else {
            handleShowFavs(id)
            setShowFavs(true);
        }
    }, [showFavs, handleShowFavs]);


    const handleShowUserPosts = useCallback(async () => {
        console.log('posts');
    }, []);


    const handlePostFavs = useCallback(async (id: string) => {
        await postUserFavs(id);
        setFavs([...favs, id]);
        setShowFavs(true);
    }, [favs]);

    const userInfo = useCallback(async () => {
        setLoading(true)
        getAuthenticatedToken(); // Obtener el token de localStorage
        const response = await fetchUserInfo();
        const data = await response.json();
        setUserData(data);
        setLoading(false)

    }, []);

    useEffect(() => {
        userInfo();
    }, [userInfo]);


    return {
        userData,
        handleShowFavs,
        handleShowUserPosts,
        fav,
        showFavs,
        toggleShowFavs,
        handlePostFavs,
        loading,
        variant

    };
};

export default useLogicProfile;

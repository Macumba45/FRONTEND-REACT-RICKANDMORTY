import { VariantProp } from '@mui/joy';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterInput } from '../../models/characters';
import {
    CharacterResponse,
    deleteCharacter,
    fetchCharactersList,
} from '../../services/api/characters';
import { fetchUserFavs, postUserFavs } from '../../services/api/user';
// import { fetchUserFavs } from '../../services/api/user';

const useLogic = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [fav, setFav] = useState<CharacterResponse[]>([]);
    const [favs, setFavs] = useState<string[]>([]);
    const [showFavs, setShowFavs] = useState(false);
    const [characters, setCharacters] = useState<CharacterInput[]>([]);
    const [variant] = useState<VariantProp>('soft');

    const goToDetails = useCallback(
        (id: string) => {
            navigate(`/characters/${id}`);
        },
        [navigate]
    );

    const getCharacters = useCallback(async () => {
        setLoading(true);
        const data = await fetchCharactersList();
        setCharacters(data);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

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



    const handlePostFavs = useCallback(async (id: string) => {
        await postUserFavs(id);
        setFavs([...favs, id]);
        setShowFavs(true);
    }, [favs]);

    const navigateToCreate = useCallback(() => {
        navigate(`/create-character`);
    }, [navigate]);

    const navigateToEdit = useCallback(
        (id: string) => {
            navigate(`/editCharacter/${id!}`);
        },
        [navigate]
    );

    const handleDeleteCharacter = useCallback(
        async (id: string) => {
            await deleteCharacter(id);
            navigate(0);
        },
        [navigate]
    );

    useEffect(() => {
        getCharacters();
    }, [getCharacters]);

    return {
        getAllcharacters: getCharacters,
        toggleShowFavs,
        handlePostFavs,
        goToDetails,
        characters,
        loading,
        variant,
        navigateToCreate,
        navigateToEdit,
        handleDeleteCharacter,
    };
};
export default useLogic;

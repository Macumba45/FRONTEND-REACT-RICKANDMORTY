import { VariantProp } from '@mui/joy';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterInput } from '../../models/characters';
import { deleteCharacter, fetchCharactersList } from '../../services/api/characters';

const useLogic = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState<CharacterInput[]>([]);
    const [variant] = useState<VariantProp>('soft');

    const goToDetails = useCallback((id: string) => {
        navigate(`/characters/${id}`);
    }, [navigate]);




    const getCharacters = useCallback(async () => {
        setLoading(true);
        const data = await fetchCharactersList();
        setCharacters(data);
        console.log(data)
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const navigateToCreate = useCallback(() => {
        navigate(`/create-character`);
    }, [navigate]);
    const navigateToEdit = useCallback((id: string) => {
        navigate(`/editCharacter/${id!}`);
    }, [navigate]);

    const handleDeleteCharacter = useCallback(async (id: string) => {
        await deleteCharacter(id);
        navigate(0);
    }, [navigate]);

    useEffect(() => {
        getCharacters();
    }, [getCharacters]);

    return {
        getAllcharacters: getCharacters,
        goToDetails,
        characters,
        loading,
        variant,
        navigateToCreate,
        navigateToEdit,
        handleDeleteCharacter
    };
};
export default useLogic;

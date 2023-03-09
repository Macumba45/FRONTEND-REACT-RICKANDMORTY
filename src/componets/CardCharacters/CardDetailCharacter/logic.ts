import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterInput } from '../../../models/characters';
import { fetchCharactersList, fetchCharacter } from '../../../services/api/characters';

const useLogic = () => {
     const navigate = useNavigate();
     const [characters, setCharacters] = useState<CharacterInput[]>([]);

     const getCharacters = useCallback(async () => {
          const data = await fetchCharactersList();
          setCharacters(data);
     }, []);

     const goToDetails = (id: string) => {
          fetchCharacter(id)
          navigate(`/characters/${id}`);
     }
     useEffect(() => {
          getCharacters();
     }, [getCharacters]);

     return {
          getAllcharacters: getCharacters,
          goToDetails,
          characters
     };
};
export default useLogic;

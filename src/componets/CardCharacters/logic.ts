import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterInput } from '../../models/characters';
import { fetchCharactersList } from '../../services/api/characters';

const useLogic = () => {
     const navigate = useNavigate();
     const [characters, setCharacters] = useState<CharacterInput[]>([]);

     const getCharacters = useCallback(async () => {
          const data = await fetchCharactersList();
          setCharacters(data);
     }, []);


     useEffect(() => {
          getCharacters();
     }, [getCharacters]);

     return {
          getAllcharacters: getCharacters,
          characters
     };
};
export default useLogic;

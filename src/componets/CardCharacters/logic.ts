import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCharactersList } from '../../services/api/characters';
import { CharacterProps } from './types';

const useLogic = () => {
     // const navigate = useNavigate();
     const [characters, setCharacters] = useState<CharacterProps[]>([]);

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

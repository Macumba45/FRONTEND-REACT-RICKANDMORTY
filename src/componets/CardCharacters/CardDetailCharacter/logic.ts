import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CharacterInput } from '../../../models/characters';
import { fetchCharacter } from '../../../services/api/characters';

const useLogic = () => {
     const navigate = useNavigate();
     const [character, setCharacters] = useState<CharacterInput>();
     const { id } = useParams<{ id: string }>();

     const getCharacterDetail = useCallback(async () => {
          const data = await fetchCharacter(id!);
          setCharacters(data);
     }, [id]);

     const goToCharactersList = () => {
          navigate(`/characters`);
     }
     useEffect(() => {
          getCharacterDetail();
     }, [getCharacterDetail]);

     return {
          getCharacterDetail,
          goToCharactersList,
          character
     };
};
export default useLogic;

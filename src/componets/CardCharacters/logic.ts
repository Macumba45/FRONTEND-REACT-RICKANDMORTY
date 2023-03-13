import { VariantProp } from '@mui/joy';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterInput } from '../../models/characters';
import { fetchCharactersList } from '../../services/api/characters';

const useLogic = () => {
     const navigate = useNavigate();
     const [variante, setVariante] = useState(true)
     const [characters, setCharacters] = useState<CharacterInput[]>([]);
     const [variant] = useState<VariantProp>('soft');

     const goToDetails = useCallback((id: string) => {
          navigate(`/characters/${id}`);
     }, [navigate]);

     const getCharacters = useCallback(async () => {
          setVariante(true);
          const data = await fetchCharactersList();
          setCharacters(data);
          setTimeout(() => {
               setVariante(false);
          },2000);
     }, []);


     useEffect(() => {
          getCharacters();
     }, [getCharacters]);

     return {
          getAllcharacters: getCharacters,
          goToDetails,
          characters,
          variante,
          variant
     };
};
export default useLogic;

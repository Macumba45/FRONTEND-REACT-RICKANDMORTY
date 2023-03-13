
import {useCallback, useEffect, useState} from 'react';
import {useParams , useNavigate} from 'react-router-dom';
import { CharacterInput } from '../../../models/characters';
import { fetchCharacter } from '../../../services/api/characters';
import {fetchEpisodeId} from '../../../services/api/episodes';
import {EpisodesDetailsProps} from './types';


const useLogic = () => {
     const [characters, setCharacters] = useState<EpisodesDetailsProps | null>(
          null
     );
     const [characterEpisode, setCharacterEpisode] = useState<CharacterInput>();
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate();
     const { id } = useParams<{ id: string }>();


     const getAllCharactersByID = useCallback(async () => {
          if (id) {
               setLoading(true);
               const data = await fetchEpisodeId(id);
               setCharacters(data);
               setLoading(false);
          }
     }, [id]);


     const getCharacterDetail = useCallback(async () => {
          const data = await fetchCharacter(id!);
          setCharacterEpisode(data);
     }, [id]);

     const goToCharacterDetails = useCallback((id: string) => {
          console.log({id});
          navigate(`/characters/${id}`);
     }, [navigate]);

     useEffect(() => {
          getCharacterDetail();
     }, [getCharacterDetail]);


     useEffect(() => {
          getAllCharactersByID();
     }, [getAllCharactersByID]);

     return {
          getAllCharactersByID,
          getCharacterDetail,
          goToCharacterDetails,
          characters,
          loading,
          // goToDetails
     };
};
export default useLogic;

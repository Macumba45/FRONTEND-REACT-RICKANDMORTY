import {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchEpisodeId} from '../../../services/api/episodes';
import {EpisodesDetailsProps} from './types';

const useLogic = () => {
     const [characters, setCharacters] = useState<EpisodesDetailsProps | null>(
          null
     );
     const [loading, setLoading] = useState(false);

     const {id} = useParams<{id: string}>();

     const getAllCharactersByID = useCallback(async () => {
          if (id) {
               setLoading(true);
               const data = await fetchEpisodeId(id);
               setCharacters(data);
               setLoading(false);
          }
     }, [id]);

     useEffect(() => {
          getAllCharactersByID();
     }, [getAllCharactersByID]);

     return {
          getAllCharactersByID,
          characters,
          loading,
     };
};
export default useLogic;

import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchEpisodeId } from '../../../services/api/episodes';
import { EpisodesDetailsProps } from './types';

const useLogic = () => {
     const [characters, setCharacters] = useState<EpisodesDetailsProps | null>(
          null
     );
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

     // const goToDetails = useCallback((id: string) => {
     //      console.log(id);
     //      navigate(`/characters/${id}`);
     // }, [navigate]);

     useEffect(() => {
          getAllCharactersByID();
     }, [getAllCharactersByID]);

     return {
          getAllCharactersByID,
          characters,
          loading,
          // goToDetails
     };
};
export default useLogic;

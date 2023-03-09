import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEpisodeId, fetchEpisodesList } from '../../services/api/episodes';
import { EpisodesProps } from './types';

const useLogic = () => {
     const navigate = useNavigate();
     const [episodes, setEpisodes] = useState<EpisodesProps[]>([]);

     const getAllEpisodes = useCallback(async () => {
          const data = await fetchEpisodesList();
          setEpisodes(data);
     }, []);

     const goToDetails = (id: string) => {
          fetchEpisodeId(id)
          navigate(`/episodes/${id}`);
     }

     useEffect(() => {
          getAllEpisodes();
     }, [getAllEpisodes]);

     return {
          getAllEpisodes,
          episodes,
          goToDetails
     };
};
export default useLogic;

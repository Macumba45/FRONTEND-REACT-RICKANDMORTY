import {VariantProp} from '@mui/joy';
import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {fetchEpisodeId, fetchEpisodesList} from '../../services/api/episodes';
import {EpisodesProps} from './types';

const useLogic = () => {
     const navigate = useNavigate();
     const [episodes, setEpisodes] = useState<EpisodesProps[]>([]);
     const [variante, setVariante] = useState(true);
     const [variant] = useState<VariantProp>('soft');

     const getAllEpisodes = useCallback(async () => {
          setVariante(true);
          const data = await fetchEpisodesList();
          setEpisodes(data);
          setTimeout(() => {
               setVariante(false);
          }, 2000);
     }, []);

     const goToDetails = (id: string) => {
          fetchEpisodeId(id);
          navigate(`/episodes/${id}`);
     };

     useEffect(() => {
          getAllEpisodes();
     }, [getAllEpisodes]);

     const episodesBySeason = episodes.reduce(
          (acc: Record<string, EpisodesProps[]>, episode) => {
               const season = episode.episode.substring(0, 3);
               if (!acc[season]) {
                    acc[season] = [];
               }
               acc[season].push(episode);
               return acc;
          },
          {}
     );

     return {
          getAllEpisodes,
          episodes,
          goToDetails,
          episodesBySeason,
          variante,
          variant,
     };
};
export default useLogic;

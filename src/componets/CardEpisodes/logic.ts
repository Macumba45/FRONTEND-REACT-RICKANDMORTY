import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEpisodesList } from '../../services/api/episodes';
import { EpisodesProps } from './types';

const useLogic = () => {

     const [episodes, setEpisodes] = useState<EpisodesProps[]>([]);


     const getAllEpisodes = useCallback(async () => {

          const data = await fetchEpisodesList()
          setEpisodes(data);
          console.log(data);


     }, []);

     useEffect(() => {

          getAllEpisodes()


     }, [getAllEpisodes])


     return {
          getAllEpisodes,
          episodes

     };
};
export default useLogic;

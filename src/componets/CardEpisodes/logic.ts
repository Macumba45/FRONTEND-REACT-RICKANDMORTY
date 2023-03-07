import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEpisodesList } from '../../services/api/episodes';

const useLogic = () => {


     const getAllEpisodes = useCallback(() => {

          fetchEpisodesList()



     }, []);


     return {
          getAllEpisodes

     };
};
export default useLogic;

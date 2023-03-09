import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export const useLogic = () => {
     const navigate = useNavigate();
     const location = useLocation();
     const [value, setValue] = useState(0);

     const goToCharactersPage = useCallback(async () => {
          setValue(0);
          navigate('/characters');
     }, [navigate]);

     const goToEpisodesPage = useCallback(async () => {
          setValue(1);
          navigate('/episodes');
     }, [navigate]);

     const goToLocationsPage = useCallback(async () => {
          setValue(2);
          navigate('/locations');
     }, [navigate]);



     return {
          value,
          goToEpisodesPage,
          goToCharactersPage,
          goToLocationsPage,
          setValue,
          location,

     };
};

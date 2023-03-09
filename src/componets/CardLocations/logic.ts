import { useCallback, useEffect, useState } from 'react';
import { fetchLocationsList } from '../../services/api/locations';
import { LocationProps } from './types';

const useLogic = () => {

     const [locations, setLocations] = useState<LocationProps[]>([]);

     const getAllLocations = useCallback(async () => {

          const data = await fetchLocationsList()
          setLocations(data);

     }, [])

     useEffect(() => {
          getAllLocations();
     }, [getAllLocations]);

     return { locations, getAllLocations };
};
export default useLogic;

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

     const getLocationsByCategory = useCallback(() => {
          return locations.reduce((acc: any, curr) => {
               const category = curr.dimension;
               if (!acc[category]) {
                    acc[category] = [];
               }
               acc[category].push(curr);
               return acc;
          }, {});
     }, [locations]);

     return { locations, getAllLocations, getLocationsByCategory };
};
export default useLogic;

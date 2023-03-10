import { VariantProp } from '@mui/joy';
import { useCallback, useEffect, useState } from 'react';
import { fetchLocationsList } from '../../services/api/locations';
import { LocationProps } from './types';

const useLogic = () => {

     const [locations, setLocations] = useState<LocationProps[]>([]);
     const [variante, setVariante] = useState(true);
     const [variant] = useState<VariantProp>('soft');



     const getAllLocations = useCallback(async () => {
          setVariante(true)
          const data = await fetchLocationsList();
          setLocations(data);
          setTimeout(() => {
               setVariante(false)
          }, 2000);


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

     return { locations, getAllLocations, getLocationsByCategory, variante, variant };
};
export default useLogic;

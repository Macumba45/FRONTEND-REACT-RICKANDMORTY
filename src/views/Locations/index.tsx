import {FC, memo} from 'react';
import NavBar from '../../../src/componets/NavBar';
import CardLocations from '../../componets/CardLocations';
import NavBarBottom from '../../componets/NavBarBottom';

const Locations: FC = () => {
     return (
          <>
               <NavBar />
               <CardLocations />
               <NavBarBottom />
          </>
     );
};

export default memo(Locations);

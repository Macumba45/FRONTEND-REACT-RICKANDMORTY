import {FC, memo} from 'react';
import NavBar from '../../../src/componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';

const Locations: FC = () => {
     return (
          <>
               <NavBar />
               <NavBarBottom />
          </>
     );
};

export default memo(Locations);

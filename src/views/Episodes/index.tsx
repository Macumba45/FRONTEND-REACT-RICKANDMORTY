import {FC, memo} from 'react';
import NavBar from '../../../src/componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';

const Episodes: FC = () => {
     return (
          <>
               <NavBar />
               <NavBarBottom />
          </>
     );
};

export default memo(Episodes);

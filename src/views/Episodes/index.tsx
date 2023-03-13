import { FC, memo } from 'react';
import NavBar from '../../../src/componets/NavBar';
import CardEpisodes from '../../componets/CardEpisodes';
import NavBarBottom from '../../componets/NavBarBottom';

const Episodes: FC = () => {
     return (
          <>
               <NavBar />
               <CardEpisodes />
               <NavBarBottom />
          </>
     );
};

export default memo(Episodes);

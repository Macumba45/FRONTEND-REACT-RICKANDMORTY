import { FC, memo } from 'react';
import NavBar from '../../../src/componets/NavBar';
import CardDetailsEpisode from '../../componets/CardEpisodes/CardDetailEpisode';
import NavBarBottom from '../../componets/NavBarBottom';

const EpisodesDetails: FC = () => {
     return (
          <>
               <NavBar />
               <CardDetailsEpisode />
               <NavBarBottom />
          </>
     );
};

export default memo(EpisodesDetails);

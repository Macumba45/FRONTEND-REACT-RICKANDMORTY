import {FC, memo} from 'react';
import NavBar from '../../componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';
import CardCharacterDetail from '../../componets/CardCharacters/CardDetailCharacter';

const CharactersDetails: FC = () => {
     return (
          <>
               <NavBar />
               <CardCharacterDetail />
               <NavBarBottom />
          </>
     );
};

export default memo(CharactersDetails);

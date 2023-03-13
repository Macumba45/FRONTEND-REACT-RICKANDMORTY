import {FC, memo} from 'react';
import NavBar from '../../../src/componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';
import CharacterForm from '../../componets/CharacterForm';

const CharacterEditForm: FC = () => {
     return (
          <>
               <NavBar />
               <CharacterForm />
               <NavBarBottom />
          </>
     );
};

export default memo(CharacterEditForm);
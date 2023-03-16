import {FC, memo} from 'react';
import NavBar from '../../../src/componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';
import CharacterForm from '../../componets/CharacterForm';
import { useLocation } from 'react-router-dom';
const CharacterEditForm: FC = () => {
     const location = useLocation();
     return (
          <>
               <NavBar />
               <CharacterForm isForEdit={location.pathname}/>
               <NavBarBottom />
          </>
     );
};

export default memo(CharacterEditForm);
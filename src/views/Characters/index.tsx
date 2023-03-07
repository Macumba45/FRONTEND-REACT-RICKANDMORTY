import { FC, memo } from 'react';
import NavBar from '../../../src/componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';
import CardCharacter from '../../componets/CardCharacters'

const Characters: FC = () => {
    return (
        <>
            <NavBar />
            <CardCharacter />
            <NavBarBottom />
        </>
    );
};

export default memo(Characters);

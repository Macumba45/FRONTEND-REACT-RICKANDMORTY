import { FC, memo } from 'react';
import NavBar from '../NavBar';
import useLogic from './logic';

const CardEpisodes: FC = () => {

    const { getAllEpisodes } = useLogic()

    getAllEpisodes()



    return (

        <h1>characters</h1>
    )
};

export default memo(CardEpisodes);

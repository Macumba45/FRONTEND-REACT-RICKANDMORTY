import { FC, memo } from 'react';
import ButtonLoadingPosition from '../../../src/componets/ButtonLoader';
import useLogic from './logic';
import { BackgroundWelcome, MainContainer, MainContainerButton } from './styles';

const Welcome: FC = () => {

    const { syncApi } = useLogic()

    syncApi()


    return (
        <MainContainer>
            <BackgroundWelcome>
                <MainContainerButton>
                    <ButtonLoadingPosition />
                </MainContainerButton>
            </BackgroundWelcome>
        </MainContainer>
    );
};

export default memo(Welcome);

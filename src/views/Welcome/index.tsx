import {FC, memo} from 'react';
import ButtonLoadingPosition from '../../../src/componets/ButtonLoader';
import {BackgroundWelcome, MainContainer, MainContainerButton} from './styles';

const Welcome: FC = () => {
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

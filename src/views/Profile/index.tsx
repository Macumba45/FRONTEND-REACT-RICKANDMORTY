import { FC, memo } from 'react';
import NavBar from '../../../src/componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';
import { AvatarContainer, ButtonsContainer, Container, ContainerProfile, DescriptionContainer, HrElement, ProfileDetailsEmail, ProfileDetailsName } from './styles';
import useLogicProfile from './logic'
import { Avatar, Button, ButtonGroup } from '@mui/material';

const Profile: FC = () => {

     const { userData, showFavs } = useLogicProfile()

     console.log(userData)

     return (
          <>
               <NavBar />
               <Container>
                    <ContainerProfile>
                         <AvatarContainer>
                              <Avatar
                                   alt="Remy Sharp"
                                   src="/static/images/avatar/1.jpg"
                                   sx={{ width: 80, height: 80, marginTop: 2 }}
                              />
                         </AvatarContainer>
                         <DescriptionContainer>
                              <ProfileDetailsName>
                                   {userData?.name || ''}
                              </ProfileDetailsName>
                              <HrElement />
                              <ProfileDetailsEmail>
                                   {userData?.email || ''}
                              </ProfileDetailsEmail>
                         </DescriptionContainer>
                         <ButtonsContainer>
                              <ButtonGroup
                                   disableElevation
                                   variant="contained"
                                   aria-label="Disabled elevation buttons">
                                   <Button
                                        onClick={showFavs}
                                        sx={{
                                             border: 'none',
                                             backgroundColor: '#420024',

                                        }}>
                                        Favorites
                                   </Button>
                              </ButtonGroup>
                         </ButtonsContainer>
                    </ContainerProfile>
               </Container>
               <NavBarBottom />
          </>
     );
};

export default memo(Profile);

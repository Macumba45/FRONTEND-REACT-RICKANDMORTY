import { FC, memo } from 'react';
import NavBar from '../../../src/componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';
import {
     AvatarContainer,
     ButtonsContainer,
     Container,
     ContainerProfile,
     DescriptionContainer,
     HrElement,
     MainContainerPost,
     ProfileDetailsEmail,
     ProfileDetailsName,
     CustomCard,
     SubContainerInfo,
     SubContainerGeneral
} from './styles';
import useLogicProfile from './logic';
import { Avatar, Button, ButtonGroup, Link, Typography } from '@mui/material';
import {
     CustomImg,
     ImgContainer,
     MainContainerLoader,
     StatusCharacter,
     SubContainerSubGeneral,
     TypographyContainer,
} from '../../componets/Card/styles';

import LinearProgress from '@mui/joy/LinearProgress';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';

const Profile: FC = () => {
     const { userData, handleShowUserPosts, fav, showFavs, toggleShowFavs, loading, variant } =
          useLogicProfile();

     if (loading) {

          return (
               <MainContainerLoader>
                    <Box
                         sx={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 3,
                              marginTop: 15,
                              marginRight: 10,
                              marginLeft: 10,
                         }}
                    >
                         <Stack spacing={4} sx={{ flex: 1 }}>
                              <LinearProgress
                                   color="primary"
                                   variant={variant}
                              />
                              <LinearProgress
                                   color="neutral"
                                   variant={variant}
                              />
                              <LinearProgress
                                   color="danger"
                                   variant={variant}
                              />
                              <LinearProgress color="info" variant={variant} />
                              <LinearProgress
                                   color="success"
                                   variant={variant}
                              />
                              <LinearProgress
                                   color="warning"
                                   variant={variant}
                              />
                         </Stack>
                    </Box>
               </MainContainerLoader>
          );
     }

     return (
          <>
               <NavBar />
               <Container>
                    <ContainerProfile>
                         <AvatarContainer>
                              <Avatar
                                   alt={userData?.name || ''}
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
                                   aria-label="Disabled elevation buttons"
                              >
                                   <Button
                                        onClick={() => toggleShowFavs(userData?.id ?? '')}

                                        sx={{
                                             border: 'none',
                                             backgroundColor: '#420024',
                                        }}
                                   >
                                        Favorites
                                   </Button>
                                   <Button
                                        onClick={handleShowUserPosts}
                                        sx={{
                                             border: 'none',
                                             backgroundColor: '#420024',
                                        }}
                                   >
                                        My posts
                                   </Button>
                              </ButtonGroup>
                         </ButtonsContainer>
                    </ContainerProfile>
               </Container>
               {showFavs && (
                    <MainContainerPost>
                         {fav.length === 0 && <p>No favorites Added</p>}
                         {fav.map((character, i) => (
                              <CustomCard
                                   key={i}>
                                   <SubContainerGeneral>
                                        <ImgContainer>
                                             <CustomImg
                                                  src={character.image}
                                                  loading="lazy"
                                                  alt="sdgsd"
                                             />
                                        </ImgContainer>
                                        <SubContainerSubGeneral>
                                             <Typography
                                             >
                                                  <Link
                                                  >
                                                       {character.name}
                                                  </Link>
                                             </Typography>
                                             <Typography >
                                                  <Link>
                                                       Specie: {character.species}
                                                  </Link>
                                             </Typography>
                                        </SubContainerSubGeneral>

                                   </SubContainerGeneral>
                                   <SubContainerInfo>
                                        <TypographyContainer>
                                             <Typography>
                                                  <StatusCharacter $isDead={character.status!} />
                                                  {character.status}
                                             </Typography>
                                             <Typography >
                                                  ID: {character.character_id}
                                             </Typography>
                                        </TypographyContainer>
                                   </SubContainerInfo>
                              </CustomCard>
                         ))}
                    </MainContainerPost>
               )}
               <NavBarBottom />

          </>
     );
};

export default memo(Profile);

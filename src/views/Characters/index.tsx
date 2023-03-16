import {memo} from 'react';
import Card from '../../componets/Card';
import NavBar from '../../componets/NavBar';
import NavBarBottom from '../../componets/NavBarBottom';
import useLogic from './logic';
import {MainContainer} from './styles';
import {MainContainerLoader} from '../../componets/Card/styles';
import LinearProgress from '@mui/joy/LinearProgress';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';

const TestCharacters = () => {
     const {
          characters,
          loading,
          goToDetails,
          navigateToEdit,
          handleDeleteCharacter,
          navigateToCreate,
          variant,
          handlePostFavs,
     } = useLogic();

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
                         <Stack spacing={4} sx={{flex: 1}}>
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
          <div>
               <NavBar />
               <MainContainer>
                    {characters.map((character) => (
                         <Card
                              key={character.character_id}
                              id={character.id}
                              character_id={character.character_id}
                              name={character.name}
                              status={character.status}
                              species={character.species}
                              image={character.image}
                              createdAt={character.createdAt}
                              handlePostFavs={() => handlePostFavs(character!.id!)}
                              handleDetails={() => goToDetails(character!.id!)}
                              handleDelete={() =>
                                   handleDeleteCharacter(character!.id!)
                              }
                              handleCreate={() => navigateToCreate()}
                              handleUpdate={() =>
                                   navigateToEdit(character!.id!)
                              }
                         />
                    ))}
               </MainContainer>
               <NavBarBottom />
          </div>
     );
};

export default memo(TestCharacters);

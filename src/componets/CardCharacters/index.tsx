import { FC, Fragment, memo } from 'react';
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import StartIcon from '@mui/icons-material/Start';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import { MainContainer } from './styles';
import { CharacterProps } from './types';
import useLogic from './logic';

const CardCharacter: FC<CharacterProps> = () => {
     const { characters,goToDetails } = useLogic();
     return (
          <MainContainer>
               {characters.map(character => (
                    <Fragment key={character.character_id}>
                         <Card variant="outlined" sx={{ width: 320, height: 400, display: 'flex', justifyContent: 'space-around' }}>
                              <CardOverflow>
                                   <AspectRatio ratio="1.35">
                                        <img
                                             src={character.image}
                                             srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                                             loading="lazy"
                                             alt=""
                                        />
                                   </AspectRatio>
                                   <IconButton
                                        aria-label="Like minimal photography"
                                        size="md"
                                        variant="solid"
                                        sx={{
                                             position: 'absolute',
                                             zIndex: 2,
                                             borderRadius: '50%',
                                             right: '1rem',
                                             bottom: 0,
                                             transform: 'translateY(50%)',
                                        }}
                                   >
                                        <Favorite />
                                   </IconButton>
                              </CardOverflow>
                              <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                                   <Link href="#multiple-actions" overlay underline="none">
                                        {character.name}
                                   </Link>
                              </Typography>
                              <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                                   <Link href="#multiple-actions">{character.species}</Link>
                              </Typography>
                              <Divider inset="context" />
                              <CardOverflow
                                   variant="soft"
                                   sx={{
                                        display: 'flex',
                                        gap: 1.5,
                                        py: 1.5,
                                        px: 'var(--Card-padding)',
                                        bgcolor: 'background.level1',
                                   }}
                              >
                                   <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                        Status: {character.status}
                                   </Typography>
                                   <Divider orientation="vertical" />
                                   <StartIcon
                                        onClick={() => goToDetails(character.id)}
                                        sx={{
                                             color: '#69c8ecff',
                                             cursor: 'pointer',
                                             marginRight: '1rem'
                                        }} />
                              </CardOverflow>
                         </Card>
                    </Fragment>
               )

               )}
          </MainContainer >

     );
};

export default memo(CardCharacter);

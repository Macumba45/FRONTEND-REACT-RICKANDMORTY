import {FC, memo} from 'react';
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import {MainContainerDetail} from '../styles';
import {CharacterProps} from '../types';
import useLogic from './logic';

const CardCharacterDetail: FC<CharacterProps> = () => {
     const {character, goToCharactersList} = useLogic();
     return (
          <MainContainerDetail>
               <Card
                    variant="outlined"
                    sx={{
                         width: 320,
                         height: 400,
                         display: 'flex',
                         justifyContent: 'space-around',
                    }}
               >
                    <CardOverflow>
                         <AspectRatio ratio="1.35">
                              <img
                                   src={character?.image}
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
                    <Typography level="h2" sx={{fontSize: 'md', mt: 2}}>
                         <Link
                              href="#multiple-actions"
                              overlay
                              underline="none"
                         >
                              {character?.name}
                         </Link>
                    </Typography>
                    <Typography level="body2" sx={{mt: 0.5, mb: 2}}>
                         <Link href="#multiple-actions">
                              {character?.species}
                         </Link>
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
                         <Typography
                              level="body3"
                              sx={{fontWeight: 'md', color: 'text.secondary'}}
                         >
                              Status: {character?.status}
                         </Typography>
                         <Divider orientation="vertical" />
                         <ArrowBackIosIcon
                              onClick={() => goToCharactersList()}
                              sx={{
                                   color: '#69c8ecff',
                                   cursor: 'pointer',
                                   marginRight: '1rem',
                              }}
                         />
                    </CardOverflow>
               </Card>
          </MainContainerDetail>
     );
};

export default memo(CardCharacterDetail);

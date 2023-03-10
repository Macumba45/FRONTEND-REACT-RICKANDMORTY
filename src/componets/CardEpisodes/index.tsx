import {FC, memo} from 'react';
import useLogic from './logic';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import picture from '../../assets/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UY1200_CR85,0,630,1200_AL_.jpg';
import {
     Accordion,
     AccordionDetails,
     AccordionSummary,
     List,
     Typography,
} from '@mui/material';
import LinearProgress from '@mui/joy/LinearProgress';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import {ExpandMore as ExpandMoreIcon} from '@mui/icons-material';
import {
     EpisodeBold,
     ImgList,
     MainContainer,
     MainContainerLoader,
} from './styles';

const CardEpisodes: FC = () => {
     const {episodesBySeason, goToDetails, variante, variant} = useLogic();
     const imageEpisodes = picture;

     if (variante) {
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
          <MainContainer>
               {Object.entries(episodesBySeason).map(
                    ([season, seasonEpisodes]) => (
                         <Accordion
                              key={season}
                              sx={{marginBottom: 2, marginRight: 2}}
                         >
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                   <Typography color="#010202ff" variant="h6">
                                        Season {season}
                                   </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                   <List>
                                        {seasonEpisodes?.map((episode: any) => (
                                             <ListItem key={episode.episode_id}>
                                                  <ListItemAvatar>
                                                       <Avatar>
                                                            <ImgList
                                                                 src={
                                                                      imageEpisodes
                                                                 }
                                                                 alt=""
                                                            />
                                                       </Avatar>
                                                  </ListItemAvatar>
                                                  <ListItemText
                                                       primary={episode.name}
                                                       secondary={
                                                            <>
                                                                 <EpisodeBold>
                                                                      Episode:{' '}
                                                                 </EpisodeBold>
                                                                 {
                                                                      episode.episode
                                                                 }
                                                            </>
                                                       }
                                                  />
                                                  <ArrowForwardIosIcon
                                                       onClick={() =>
                                                            goToDetails(
                                                                 episode.id
                                                            )
                                                       }
                                                       sx={{
                                                            color: '#69c8ecff',
                                                            cursor: 'pointer',
                                                            marginRight: '1rem',
                                                       }}
                                                  />
                                             </ListItem>
                                        ))}
                                   </List>
                              </AccordionDetails>
                         </Accordion>
                    )
               )}
          </MainContainer>
     );
};

export default memo(CardEpisodes);

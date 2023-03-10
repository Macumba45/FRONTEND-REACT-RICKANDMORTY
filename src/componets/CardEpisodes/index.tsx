import { FC, memo } from 'react';
import useLogic from './logic';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import picture from '../../assets/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UY1200_CR85,0,630,1200_AL_.jpg';
import { Accordion, AccordionDetails, AccordionSummary, List, Typography } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Star as StarIcon } from '@mui/icons-material';
import { EpisodeBold, ImgList, MainContainer } from './styles';


const CardEpisodes: FC = () => {
    const { episodesBySeason, goToDetails } = useLogic();
    const imageEpisodes = picture;

    return (
        <MainContainer>
            {Object.entries(episodesBySeason).map(([season, seasonEpisodes]) => (
                <Accordion key={season} sx={{ marginBottom: 2, marginRight: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                        <Typography color='#69c8ecff' variant="h6">Season {season}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List >
                            {seasonEpisodes?.map((episode: any) => (
                                <ListItem key={episode.episode_id}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ImgList src={imageEpisodes} alt="" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={episode.name}
                                        secondary={<><EpisodeBold>Episode: </EpisodeBold>{episode.episode}</>}
                                    />
                                    <ArrowForwardIosIcon
                                        onClick={() => goToDetails(episode.id)}
                                        sx={{
                                            color: '#69c8ecff',
                                            cursor: 'pointer',
                                            marginRight: '1rem'
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </MainContainer>
    );
}

export default memo(CardEpisodes);

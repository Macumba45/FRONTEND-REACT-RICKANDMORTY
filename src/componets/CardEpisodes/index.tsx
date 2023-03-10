import { FC, memo } from 'react';
import useLogic from './logic';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import StartIcon from '@mui/icons-material/Start';
import Divider from '@mui/material/Divider';
import { EpisodeBold, ImgList, MainContainer, StyledList } from './styles';
import picture from '../../assets/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UY1200_CR85,0,630,1200_AL_.jpg';
import { Typography } from '@mui/material';

const CardEpisodes: FC = () => {
    const { episodesBySeason, goToDetails } = useLogic();
    const imageEpisodes = picture;

    return (
        <MainContainer>
            {Object.entries(episodesBySeason).map(([season, seasonEpisodes]) => (
                <div key={season}>
                    <Typography variant="h6" gutterBottom>
                        Season {season}
                    </Typography>
                    {seasonEpisodes?.map((episode:any) => (
                        <StyledList
                            key={episode.episode_id}
                        >
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImgList src={imageEpisodes} alt="" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={episode.name}
                                    secondary={<><EpisodeBold>Episode: </EpisodeBold>{episode.episode}</>}
                                />
                                <StartIcon
                                    onClick={() => goToDetails(episode.id)}
                                    sx={{
                                        color: '#69c8ecff',
                                        cursor: 'pointer',
                                        marginRight: '1rem'
                                    }}
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </StyledList>
                    ))}
                </div>
            ))}
        </MainContainer>
    );
};

export default memo(CardEpisodes);

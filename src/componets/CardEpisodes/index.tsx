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

const CardEpisodes: FC = () => {

    const { episodes, goToDetails } = useLogic();

    const imageEpisodes = picture;

    return (
        <MainContainer>
            {episodes.map((item) => (
                <StyledList
                    key={item.episode_id} // Es importante agregar la prop key para evitar una advertencia de React

                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImgList src={imageEpisodes} alt="" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.name}
                            secondary={<><EpisodeBold>Episode: </EpisodeBold>{item.episode}</>}
                        />
                        <StartIcon
                            onClick={() => goToDetails(item.id)}
                            sx={{
                                color: '#69c8ecff',
                                cursor: 'pointer',
                                marginRight: '1rem'
                            }} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </StyledList>
            ))}
        </MainContainer>
    );
};

export default memo(CardEpisodes);

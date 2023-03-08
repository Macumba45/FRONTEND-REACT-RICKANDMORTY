import { FC, memo } from 'react';
import useLogic from './logic';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
import { ImgList, MainContainer } from './styles';
import picture from '../../assets/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UY1200_CR85,0,630,1200_AL_.jpg'

const CardEpisodes: FC = () => {

    const { getAllEpisodes, episodes } = useLogic()

    const imageEpisodes = picture





    return (
        <MainContainer>
            {episodes.map((item) => (
                <List
                    key={item.episode_id} // Es importante agregar la prop key para evitar una advertencia de React
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImgList src={imageEpisodes} alt="" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.name} secondary={`Episode: ${item.episode}`} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            ))}
        </MainContainer>
    );
};

export default memo(CardEpisodes);

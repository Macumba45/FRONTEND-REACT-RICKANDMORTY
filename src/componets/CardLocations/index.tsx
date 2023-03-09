import { FC, memo } from 'react';
import useLogic from './logic';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
import { EpisodeBold, MainContainer, StyledList } from './styles';
import { Typography } from '@mui/material';

const CardLocations: FC = () => {
    const { locations, getLocationsByCategory } = useLogic();
    const locationsByCategory = getLocationsByCategory();


    return (
        <MainContainer>
            {Object.entries(locationsByCategory).map(([category, categoryLocations]) => (
                <div key={category}>
                    <Typography variant="h6" gutterBottom>
                        {category}
                    </Typography>
                    {Array.isArray(categoryLocations) && categoryLocations.map((item: any) => (
                        <StyledList key={item.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={[item.name]}
                                    secondary={<><EpisodeBold>Dimensions: </EpisodeBold>{item.dimension}</>}
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </StyledList>
                    ))}
                </div>
            ))}
        </MainContainer>
    );
}

export default memo(CardLocations)

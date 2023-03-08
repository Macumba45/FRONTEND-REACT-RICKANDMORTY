import {FC, memo} from 'react';
import useLogic from './logic';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
import {MainContainer} from './styles';

const CardLocations: FC = () => {
     return (
          <MainContainer>
               <List
                    sx={{
                         width: '100%',
                         maxWidth: 360,
                         bgcolor: 'background.paper',
                    }}
               >
                    <ListItem>
                         <ListItemAvatar>
                              <Avatar>
                                   <ImageIcon />
                              </Avatar>
                         </ListItemAvatar>
                         <ListItemText
                              primary="Photos"
                              secondary="Jan 9, 2014"
                         />
                    </ListItem>
                    <Divider variant="inset" component="li" />
               </List>
          </MainContainer>
     );
};

export default memo(CardLocations);

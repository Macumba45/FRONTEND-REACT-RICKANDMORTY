import {FC, memo} from 'react';
import useLogic from './logic';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';
import {
     EpisodeBold,
     MainContainer,
     MainContainerLoader,
     StyledList,
} from './styles';

const CardLocations: FC = () => {
     const {getLocationsByCategory, variante, variant} = useLogic();
     const locationsByCategory = getLocationsByCategory();

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
               {Object.entries(locationsByCategory).map(
                    ([category, categoryLocations]) => (
                         <Accordion
                              key={category}
                              sx={{marginBottom: 2, marginRight: 2}}
                         >
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                   <Typography color="#69c8ecff" variant="h6">
                                        {category}
                                   </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                   <List>
                                        {Array.isArray(categoryLocations) &&
                                             categoryLocations.map(
                                                  (item: any) => (
                                                       <StyledList
                                                            key={item.id}
                                                       >
                                                            <ListItem>
                                                                 <ListItemAvatar>
                                                                      <Avatar>
                                                                           <ImageIcon />
                                                                      </Avatar>
                                                                 </ListItemAvatar>
                                                                 <ListItemText
                                                                      primary={[
                                                                           item.name,
                                                                      ]}
                                                                      secondary={
                                                                           <>
                                                                                <EpisodeBold>
                                                                                     Dimensions:{' '}
                                                                                </EpisodeBold>
                                                                                {
                                                                                     item.dimension
                                                                                }
                                                                           </>
                                                                      }
                                                                 />
                                                            </ListItem>
                                                            <Divider
                                                                 variant="inset"
                                                                 component="li"
                                                            />
                                                       </StyledList>
                                                  )
                                             )}
                                   </List>
                              </AccordionDetails>
                         </Accordion>
                    )
               )}
          </MainContainer>
     );
};

export default memo(CardLocations);

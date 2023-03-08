import { FC, memo } from 'react';
import { useLogic } from './logic';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavBarBottomContainer } from './styles';
import { createTheme } from '@mui/material/styles';


const NavBarBottom: FC = () => {
     const { goToCharactersPage, goToLocationsPage, goToEpisodesPage, location } =
          useLogic();

     const theme = createTheme({
          palette: {
               primary: {
                    main: '#3fccffff',

               },
               secondary: {
                    main: '#000000ff',
               },
          },
     });

     return (
          <NavBarBottomContainer>
               <Box
                    sx={{
                         display: 'flex',
                         justifyContent: 'space-between',
                         position: 'fixed',
                         bottom: '0',
                         width: '100%',
                    }}
               >
                    <BottomNavigation
                         showLabels
                         value={location.pathname}
                         sx={{ flex: 1 }}
                         color="tertiary"
                    >
                         <BottomNavigationAction
                              label="Episodes"
                              icon={<PlayArrowIcon fontSize="medium" sx={{ color: '#3fccffff' }} />}
                              value="/episodes"
                              onClick={goToEpisodesPage}
                              sx={{
                                   color: location.pathname === '/episodes' ? theme.palette.secondary.main : theme.palette.primary.main,
                                   '& .MuiBottomNavigationAction-label': {
                                        color: '#3fccffff', // Aquí puedes especificar el color deseado para el label
                                   },
                              }}
                         />
                         <BottomNavigationAction
                              label="Characters"
                              icon={<FavoriteIcon sx={{ color: '#3fccffff' }} />}
                              value="/characters"
                              onClick={goToCharactersPage}
                              sx={{
                                   color:
                                        location.pathname === '/characters' ? theme.palette.secondary.main : theme.palette.primary.main,
                                   '& .MuiBottomNavigationAction-label': {
                                        color: '#3fccffff', // Aquí puedes especificar el color deseado para el label
                                   },
                              }}
                         />
                         <BottomNavigationAction
                              label="Locations"
                              icon={<LocationOnIcon sx={{ color: '#3fccffff' }} />}
                              value="/locations"
                              onClick={goToLocationsPage}
                              sx={{
                                   color:
                                        location.pathname === '/locations' ? theme.palette.secondary.main : theme.palette.primary.main,
                                   '& .MuiBottomNavigationAction-label': {
                                        color: '#3fccffff', // Aquí puedes especificar el color deseado para el label
                                   },
                              }}
                         />

                    </BottomNavigation>
               </Box>
          </NavBarBottomContainer>
     );
};

export default memo(NavBarBottom);

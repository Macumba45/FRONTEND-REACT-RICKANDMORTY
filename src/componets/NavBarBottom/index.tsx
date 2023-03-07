import { FC, memo } from 'react';
import { useLogic } from './logic';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavBarBottomContainer } from './styles';

const NavBarBottom: FC = () => {
     const { goToCharactersPage, goToLocationsPage, goToEpisodesPage, location } =
          useLogic();

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
                    >
                         <BottomNavigationAction
                              label="Characters"
                              icon={<FavoriteIcon />}
                              value="/characters"
                              onClick={goToCharactersPage}
                         />
                         <BottomNavigationAction
                              label="Episodes"
                              icon={<PlayArrowIcon />}
                              value="/episodes"
                              onClick={goToEpisodesPage}
                         />
                         <BottomNavigationAction
                              label="Locations"
                              icon={<LocationOnIcon />}
                              value="/locations"
                              onClick={goToLocationsPage}
                         />
                    </BottomNavigation>
               </Box>
          </NavBarBottomContainer>
     );
};

export default memo(NavBarBottom);

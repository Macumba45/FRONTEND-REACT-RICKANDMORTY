import {FC} from 'react';
import {Props} from './type';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {motion} from 'framer-motion';
import {Menu, MenuItem} from '@mui/material';
import {useNavBarLogic} from './logic';
import {
     Nav,
     IconContainerLogin,
     IconContainerSignUp,
     NavbarLinkNotLogged,
     NavbarLinkLogged,
     NavContainerLogged,
     LogoutButton,
     NavContainerNotLogged,
     IconContainerProfile,
     IconContainerLogOut,
     NavLogged,
     ConditionalContainer,
} from './styles';

const NavBar: FC<Props> = () => {
     const {
          isNavBarLogin,
          isLogoutFeed,
          handleLogout,
          handleBackPage,
          anchorEl,
          handleMenuOpen,
          handleMenuClose,
     } = useNavBarLogic();

     return (
          <>
               <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                    {isNavBarLogin ? (
                         <Nav>
                              <NavContainerNotLogged>
                                   <IconContainerLogin />
                                   <NavbarLinkNotLogged to="/login">
                                        Login
                                   </NavbarLinkNotLogged>
                                   <IconContainerSignUp />
                                   <NavbarLinkNotLogged to="/signup">
                                        Register
                                   </NavbarLinkNotLogged>
                              </NavContainerNotLogged>
                         </Nav>
                    ) : (
                         <NavLogged>
                              <NavContainerLogged>
                                   {/* {isEpisodePage && (
                                   <LogoutButton onClick={handleBackPage}>
                                        <IconContainerLogOut />
                                   </LogoutButton>
                              )} */}
                                   {isLogoutFeed ? (
                                        <ConditionalContainer>
                                             <IconButton
                                                  size="large"
                                                  edge="start"
                                                  aria-controls="menu"
                                                  aria-haspopup="true"
                                                  aria-label="menu"
                                                  sx={{ml: 0.1, color: 'white'}}
                                                  onClick={handleMenuOpen}
                                             >
                                                  <MenuIcon />
                                             </IconButton>
                                             <Menu
                                                  id="menu"
                                                  anchorEl={anchorEl}
                                                  open={Boolean(anchorEl)}
                                                  onClose={handleMenuClose}
                                             >
                                                  <MenuItem
                                                       onClick={handleLogout}
                                                       sx={{
                                                            padding: 0.5,
                                                            marginTop: 0.5,
                                                            marginRight: 1,
                                                            marginLeft: 1,
                                                       }}
                                                  >
                                                       Logout
                                                  </MenuItem>
                                             </Menu>
                                        </ConditionalContainer>
                                   ) : (
                                        <LogoutButton onClick={handleBackPage}>
                                             <IconContainerLogOut />
                                        </LogoutButton>
                                   )}
                                   <NavbarLinkLogged to="/profile">
                                        <IconContainerProfile />
                                   </NavbarLinkLogged>
                              </NavContainerLogged>
                         </NavLogged>
                    )}
               </motion.div>
          </>
     );
};

export default NavBar;

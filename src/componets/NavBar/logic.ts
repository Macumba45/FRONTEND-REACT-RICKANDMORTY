import {useLocation, useNavigate} from 'react-router-dom';
import {useCallback, useState} from 'react';

export const useNavBarLogic = () => {
     const navigate = useNavigate();
     const location = useLocation();
     const isNavBarLogin =
          location.pathname === '/login' ||
          location.pathname === '/signup' ||
          location.pathname === '/';

     const isLogoutFeed =
          location.pathname === '/characters' || '/episodes' || '/locations';

     const handleLogout = useCallback(() => {
          // aquí iría la lógica para cerrar sesión del usuario
          window.localStorage.clear();
          navigate('/login');
     }, [navigate]);

     const handleBackPage = useCallback(() => {
          if (location.pathname.startsWith('/profile')) {
               navigate('/characters');
          }
     }, []);

     const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

     const handleMenuOpen = useCallback(
          (event: React.MouseEvent<HTMLButtonElement>) => {
               setAnchorEl(event.currentTarget);
          },
          []
     );

     const handleMenuClose = useCallback(() => {
          setAnchorEl(null);
     }, []);

     return {
          isNavBarLogin,
          isLogoutFeed,
          handleLogout,
          handleBackPage,
          anchorEl,
          handleMenuOpen,
          handleMenuClose,
     };
};

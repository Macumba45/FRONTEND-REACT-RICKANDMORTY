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

     const isEpisodePage = location.pathname.startsWith('/episodes/');

     const handleLogout = useCallback(() => {
          // aquí iría la lógica para cerrar sesión del usuario
          Object.keys(localStorage).forEach((key) => {
               if (key !== 'isSync') {
                    localStorage.removeItem(key);
               }
          });
          navigate('/login');
     }, [navigate]);

     const handleBackPage = useCallback(() => {
          if (location.pathname.startsWith('/profile')) {
               navigate('/characters');
          }
          if (location.pathname.startsWith('/episodes')) {
               navigate('/episodes');
          }
     }, [location.pathname, navigate]);

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
          isEpisodePage,
     };
};

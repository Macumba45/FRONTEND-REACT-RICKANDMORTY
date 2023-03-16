import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {FC, memo, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../views/auth/Login';
import {getAuthenticatedToken} from '../services/storage';
import SignUp from '../views/auth/SignUp';
import Welcome from '../views/Welcome';
import CharactersDetails from '../views/CharacterDetails';
import Episodes from '../views/Episodes';
import Locations from '../views/Locations';
import Profile from '../views/Profile';
import EpisodesDetails from '../views/EpisodesDetails';
import {Box, Button, Container, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import CharacterEditForm from '../views/CharacterEditForm';
import TestCharacters from '../views/Characters';

const Router: FC = () => {
     const ProtectedRoutes = ({children}: {children: JSX.Element}) => {
          const token = getAuthenticatedToken();
          const location = useLocation();

          if (!token || token === null) {
               return <Navigate to="/login" replace state={{from: location}} />;
          }

          return children;
     };

     const PublicRoute = ({children}: {children: JSX.Element}) => {
          const token = getAuthenticatedToken();
          const location = useLocation();

          if (token) {
               if (
                    location.pathname === '/login' ||
                    location.pathname === '/signup' ||
                    location.pathname === '/'
               ) {
                    return (
                         <Navigate
                              to="/characters"
                              replace
                              state={{
                                   from: location,
                              }}
                         />
                    );
               }
               return children;
          }

          return children;
     };

     const NotFound = () => {
          const navigate = useNavigate();
          const token = getAuthenticatedToken();

          useEffect(() => {
               if (token) {
                    // navigate('/welcome');
                    // console.log(token);
               } else {
                    navigate('/login', {replace: true});
               }
          }, [navigate, token]);

          return (
               <Box
                    sx={{
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                         minHeight: '100vh',
                    }}
               >
                    <Container maxWidth="md">
                         <Grid container spacing={2}>
                              <Grid xs={6}>
                                   <Typography variant="h1">404</Typography>
                                   <Typography variant="h6">
                                        The page you’re looking for doesn’t
                                        exist.
                                   </Typography>
                                   <Button href="/login" variant="contained">
                                        Back Home
                                   </Button>
                              </Grid>
                              <Grid xs={6}>
                                   <img
                                        src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                                        alt=""
                                        width={500}
                                        height={250}
                                   />
                              </Grid>
                         </Grid>
                    </Container>
               </Box>
          );
     };

     return (
          <BrowserRouter>
               <Routes>
                    <Route
                         path="/"
                         element={
                              <PublicRoute>
                                   <Login />
                              </PublicRoute>
                         }
                    />
                    <Route
                         path="/login"
                         element={
                              <PublicRoute>
                                   <Login />
                              </PublicRoute>
                         }
                    />
                    <Route
                         path="/signup"
                         element={
                              <PublicRoute>
                                   <SignUp />
                              </PublicRoute>
                         }
                    />
                    <Route
                         path="/welcome"
                         element={
                              <ProtectedRoutes>
                                   <Welcome />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/characters"
                         element={
                              <ProtectedRoutes>
                                   <TestCharacters />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/characters/:id"
                         element={
                              <ProtectedRoutes>
                                   <CharactersDetails />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/editCharacter/:id"
                         element={
                              <ProtectedRoutes>
                                   <CharacterEditForm />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/create-character"
                         element={
                              <ProtectedRoutes>
                                   <CharacterEditForm />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/episodes"
                         element={
                              <ProtectedRoutes>
                                   <Episodes />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/episodes/:id"
                         element={
                              <ProtectedRoutes>
                                   <EpisodesDetails />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/locations"
                         element={
                              <ProtectedRoutes>
                                   <Locations />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/profile"
                         element={
                              <ProtectedRoutes>
                                   <Profile />
                              </ProtectedRoutes>
                         }
                    />
                    <Route path="*" element={<NotFound />} />
               </Routes>
          </BrowserRouter>
     );
};

export default memo(Router);

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FC, memo, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../views/auth/Login';
import { getAuthenticatedToken } from '../services/storage';
import SignUp from '../views/auth/SignUp';
import Welcome from '../views/Welcome';
import Characters from '../views/Characters';
import Episodes from '../views/Episodes';
import Locations from '../views/Locations';
import Profile from '../views/Profile';
import EpisodesDetails from '../views/EpisodesDetails';

const Router: FC = () => {
    const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
        const token = getAuthenticatedToken();
        const location = useLocation();

        if (!token || token === null) {
            return <Navigate to="/login" replace state={{ from: location }} />;
        }

        return children;
    };

    const PublicRoute = ({ children }: { children: JSX.Element }) => {
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
                navigate('/login', { replace: true });
            }
        }, [navigate, token]);

        return (
            <div>
                <h1>404 Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </div>
        );
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
                <Route path="/welcome" element={<ProtectedRoutes><Welcome /></ProtectedRoutes>} />
                <Route path="/characters" element={<ProtectedRoutes><Characters /></ProtectedRoutes>} />
                <Route path="/episodes" element={<ProtectedRoutes><Episodes /></ProtectedRoutes>} />
                <Route path="/episodes/:id" element={<ProtectedRoutes><EpisodesDetails /></ProtectedRoutes>} />
                <Route path="/locations" element={<ProtectedRoutes><Locations /></ProtectedRoutes>} />
                <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default memo(Router);

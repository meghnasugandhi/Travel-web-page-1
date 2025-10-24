import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/authSlice';

// Renamed page components
import LoginScreen from './pages/LoginScreen';
import SignupPage from './pages/SignupPage';
import ArtGenerator from './components/ArtGenerator';
import UserArtPage from './pages/UserArtPage'; // Renamed
import GalleryPage from './pages/GalleryPage';
import ArtDetailPage from './pages/ArtDetailPage';

import './App.css'; // Global CSS

function App() {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Router>
            <nav className="navbar">
                <Link to="/" className="navbar-brand">Abstract Art</Link>
                <ul className="nav-links">
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/generate">Generate</Link></li>
                    {isAuthenticated && user ? (
                        <>
                            <li><Link to="/my-art">My Art</Link></li>
                            <li><span className="nav-user">Welcome, {user.username}!</span></li>
                            <li><button onClick={handleLogout} className="nav-button">Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </>
                    )}
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<GalleryPage />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/generate" element={<ArtGenerator />} />
                <Route path="/my-art" element={<UserArtPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/art/:id" element={<ArtDetailPage />} />
                {/* Fallback for unmatched routes */}
                <Route path="*" element={<div className="container"><h2>404 - Page Not Found</h2><p>The page you are looking for does not exist.</p><Link to="/">Go Home</Link></div>} />
            </Routes>
        </Router>
    );
}

export default App;
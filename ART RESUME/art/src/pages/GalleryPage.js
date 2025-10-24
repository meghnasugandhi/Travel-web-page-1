import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGalleryArt, toggleLike } from '../features/gallerySlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Ensure you have react-icons installed

const GalleryPage = () => {
    const dispatch = useDispatch();
    const { publicArt, isLoading, error } = useSelector((state) => state.gallery);
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(fetchGalleryArt());
    }, [dispatch]);

    const handleLikeToggle = (artId, isLiked) => {
        if (!isAuthenticated) {
            alert('Please log in to like art!');
            return;
        }
        dispatch(toggleLike({ artId, isLiked }));
    };

    if (isLoading) {
        return <div className="container">Loading gallery...</div>;
    }

    if (error) {
        return <div className="container" style={{ color: 'red' }}>Error: {error}</div>;
    }

    return (
        <div className="container">
            <h1>Public Gallery</h1>
            <div className="art-grid">
                {publicArt.map((art) => (
                    <div key={art.id} className="art-card">
                        <Link to={`/art/${art.id}`}>
                            <img src={`${process.env.REACT_APP_API_BASE_URL.replace('/api', '')}${art.image_url}`} alt={`Art by ${art.username}`} />
                        </Link>
                        <div className="art-info">
                            <h3>Art by {art.username}</h3>
                            <p>Minted: {new Date(art.created_at).toLocaleDateString()}</p>
                            <div className="like-button-container">
                                {isAuthenticated && user && (
                                    <button
                                        onClick={() => handleLikeToggle(art.id, art.isLikedByCurrentUser)}
                                        className="like-button"
                                        title={art.isLikedByCurrentUser ? "Unlike" : "Like"}
                                    >
                                        {art.isLikedByCurrentUser ? <FaHeart /> : <FaRegHeart />}
                                    </button>
                                )}
                                <span className="like-count">{art.likes}</span>
                            </div>
                        </div>
                    </div>
                ))}
                {publicArt.length === 0 && !isLoading && <p>No public art pieces available yet.</p>}
            </div>
        </div>
    );
};

export default GalleryPage;
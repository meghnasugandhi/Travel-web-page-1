import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMyArt } from '../features/artSlice';
import { Link } from 'react-router-dom';

const UserArtPage = () => {
    const dispatch = useDispatch();
    const { myArt, isLoading, error } = useSelector((state) => state.art);
    const { isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(fetchMyArt());
        }
    }, [dispatch, isAuthenticated]);

    if (!isAuthenticated) {
        return <div className="container">Please log in to view your art.</div>;
    }

    if (isLoading) {
        return <div className="container">Loading your art...</div>;
    }

    if (error) {
        return <div className="container" style={{ color: 'red' }}>Error: {error}</div>;
    }

    return (
        <div className="container">
            <h1>My Minted Art</h1>
            <div className="art-grid">
                {myArt.length > 0 ? (
                    myArt.map((art) => (
                        <div key={art.id} className="art-card">
                            <Link to={`/art/${art.id}`}>
                                <img src={`${process.env.REACT_APP_API_BASE_URL.replace('/api', '')}${art.image_url}`} alt={`Art by you`} />
                            </Link>
                            <div className="art-info">
                                <h3>Art Piece #{art.id}</h3>
                                <p>Likes: {art.likes}</p>
                                <p>Minted: {new Date(art.created_at).toLocaleDateString()}</p>
                                <p>Public: {art.is_public ? 'Yes' : 'No'}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>You haven't minted any art yet. Go to <Link to="/generate">Generate Art</Link> to create your first piece!</p>
                )}
            </div>
        </div>
    );
};

export default UserArtPage;
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArtById } from '../api';

const ArtDetailPage = () => {
    const { id } = useParams();
    const [art, setArt] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArt = async () => {
            try {
                setIsLoading(true);
                const response = await getArtById(id);
                setArt(response.data);
            } catch (err) {
                console.error('Error fetching art details:', err);
                setError(err.response?.data?.message || 'Failed to load art details.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchArt();
    }, [id]);

    if (isLoading) {
        return <div className="container">Loading art details...</div>;
    }

    if (error) {
        return <div className="container" style={{ color: 'red' }}>Error: {error}</div>;
    }

    if (!art) {
        return <div className="container">Art piece not found.</div>;
    }

    // Attempt to parse p5_params, handling potential errors
    let p5ParamsDisplay = {};
    try {
        if (typeof art.p5_params === 'string') {
            p5ParamsDisplay = JSON.parse(art.p5_params);
        } else if (typeof art.p5_params === 'object' && art.p5_params !== null) {
            p5ParamsDisplay = art.p5_params;
        }
    } catch (e) {
        console.error('Error parsing p5_params:', e);
        p5ParamsDisplay = { error: 'Could not parse parameters' };
    }


    return (
        <div className="container art-detail-container">
            <h2>Art Piece #{art.id}</h2>
            <img src={`${process.env.REACT_APP_API_BASE_URL.replace('/api', '')}${art.image_url}`} alt={`Art by ${art.username}`} className="art-detail-image" />
            <div className="art-detail-info">
                <p><strong>Created By:</strong> {art.username}</p>
                <p><strong>Likes:</strong> {art.likes}</p>
                <p><strong>Created At:</strong> {new Date(art.created_at).toLocaleDateString()}</p>
                <p><strong>Public:</strong> {art.is_public ? 'Yes' : 'No'}</p>
                {p5ParamsDisplay && (
                    <>
                        <h3>Generation Parameters:</h3>
                        <ul>
                            {Object.entries(p5ParamsDisplay).map(([key, value]) => (
                                <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {JSON.stringify(value)}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
            <Link to="/gallery" className="back-button">Back to Gallery</Link>
        </div>
    );
};

export default ArtDetailPage;
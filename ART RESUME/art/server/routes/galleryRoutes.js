const express = require('express');

module.exports = (pool, authenticateToken) => {
    const router = express.Router();

    // Get all public art pieces for the gallery
    router.get('/', async (req, res) => {
        try {
            const [artPieces] = await pool.query(
                'SELECT ap.id, ap.user_id, u.username, ap.image_url, ap.p5_params, ap.likes, ap.created_at FROM art_pieces ap JOIN users u ON ap.user_id = u.id WHERE ap.is_public = TRUE ORDER BY ap.created_at DESC'
            );
            res.json(artPieces);
        } catch (error) {
            console.error('Error fetching gallery art:', error);
            res.status(500).json({ message: 'Server error fetching gallery art.' });
        }
    });

    // Like an art piece
    router.post('/:artId/like', authenticateToken, async (req, res) => {
        const artId = req.params.artId;
        const userId = req.user.id;

        try {
            const [existingLike] = await pool.query('SELECT id FROM likes WHERE user_id = ? AND art_id = ?', [userId, artId]);

            if (existingLike.length > 0) {
                return res.status(409).json({ message: 'Art piece already liked by this user.' });
            }

            await pool.query('INSERT INTO likes (user_id, art_id) VALUES (?, ?)', [userId, artId]);
            await pool.query('UPDATE art_pieces SET likes = likes + 1 WHERE id = ?', [artId]);

            res.status(200).json({ message: 'Art piece liked successfully.' });
        } catch (error) {
            console.error('Error liking art:', error);
            res.status(500).json({ message: 'Server error during like operation.' });
        }
    });

    // Unlike an art piece (optional, but good for completeness)
    router.post('/:artId/unlike', authenticateToken, async (req, res) => {
        const artId = req.params.artId;
        const userId = req.user.id;

        try {
            const [result] = await pool.query('DELETE FROM likes WHERE user_id = ? AND art_id = ?', [userId, artId]);

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Like not found or already removed.' });
            }

            await pool.query('UPDATE art_pieces SET likes = GREATEST(0, likes - 1) WHERE id = ?', [artId]);

            res.status(200).json({ message: 'Art piece unliked successfully.' });
        } catch (error) {
            console.error('Error unliking art:', error);
            res.status(500).json({ message: 'Server error during unlike operation.' });
        }
    });


    return router;
};
const express = require('express');
const path = require('path'); // Ensure path is imported for consistent usage with Multer

module.exports = (pool, authenticateToken, upload) => {
    const router = express.Router();

    // Mint a new art piece (upload image and save data)
    router.post('/mint', authenticateToken, upload.single('image'), async (req, res) => {
        const { p5_params, is_public } = req.body; // p5_params should be a JSON string
        const image_url = req.file ? `/uploads/${req.file.filename}` : null;
        const userId = req.user.id;

        if (!image_url) {
            return res.status(400).json({ message: 'Image upload failed.' });
        }
        if (!p5_params) {
            return res.status(400).json({ message: 'P5 parameters are required.' });
        }

        try {
            const [result] = await pool.query(
                'INSERT INTO art_pieces (user_id, image_url, p5_params, is_public) VALUES (?, ?, ?, ?)',
                [userId, image_url, p5_params, is_public ? 1 : 0]
            );
            res.status(201).json({
                message: 'Art piece minted successfully!',
                artId: result.insertId,
                image_url: image_url
            });
        } catch (error) {
            console.error('Error minting art:', error);
            res.status(500).json({ message: 'Server error during art minting.' });
        }
    });

    // Get all art pieces by the logged-in user
    router.get('/my-art', authenticateToken, async (req, res) => {
        const userId = req.user.id;
        try {
            const [artPieces] = await pool.query(
                'SELECT id, image_url, p5_params, likes, is_public, created_at FROM art_pieces WHERE user_id = ? ORDER BY created_at DESC',
                [userId]
            );
            res.json(artPieces);
        } catch (error) {
            console.error('Error fetching user art:', error);
            res.status(500).json({ message: 'Server error fetching user art.' });
        }
    });

    // Get a single art piece by ID (for detail page)
    router.get('/:id', async (req, res) => {
        const artId = req.params.id;
        try {
            const [artPieces] = await pool.query(
                'SELECT ap.id, ap.user_id, u.username, ap.image_url, ap.p5_params, ap.likes, ap.is_public, ap.created_at FROM art_pieces ap JOIN users u ON ap.user_id = u.id WHERE ap.id = ?',
                [artId]
            );
            if (artPieces.length === 0) {
                return res.status(404).json({ message: 'Art piece not found.' });
            }
            res.json(artPieces[0]);
        } catch (error) {
            console.error('Error fetching single art piece:', error);
            res.status(500).json({ message: 'Server error fetching art piece.' });
        }
    });

    return router;
};
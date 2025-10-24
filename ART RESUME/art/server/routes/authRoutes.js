const express = require('express');

module.exports = (pool, bcrypt, jwt, jwtSecret) => {
    const router = express.Router();

    // User Registration
    router.post('/register', async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        try {
            const [existingUsers] = await pool.query('SELECT id FROM users WHERE username = ?', [username]);
            if (existingUsers.length > 0) {
                return res.status(409).json({ message: 'Username already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ message: 'Server error during registration' });
        }
    });

    // User Login
    router.post('/login', async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        try {
            const [users] = await pool.query('SELECT id, username, password FROM users WHERE username = ?', [username]);
            if (users.length === 0) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const user = users[0];
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret, { expiresIn: '1h' });
            res.json({ token, user: { id: user.id, username: user.username } });
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ message: 'Server error during login' });
        }
    });

    return router;
};
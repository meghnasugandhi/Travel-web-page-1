// /backend/routes/miscRoutes.js
const express = require('express');
const router = express.Router();

// Placeholder for a controller function (optional, but good practice)
const subscribeToNewsletter = (req, res) => {
    const { email } = req.body;
    
    if (!email) {
        return res.status(400).json({ message: 'Email address is required for subscription.' });
    }

    // --- In a real application, you would: ---
    // 1. Validate the email format.
    // 2. Save the email to a database (e.g., a 'Subscribers' collection in MongoDB).
    console.log(`Received subscription request for: ${email}`);
    // ------------------------------------------

    res.status(201).json({ message: `Successfully subscribed ${email} to the newsletter.` });
};

// Route for newsletter subscription (matches the frontend's 'Join The Newsletter' action)
// Full path: POST /api/subscribe
router.post('/subscribe', subscribeToNewsletter);

// Optional: Route for contact inquiry (matches the 'Send Mail' section)
// Full path: POST /api/inquiry
router.post('/inquiry', (req, res) => {
    // Logic for sending an email (e.g., using Nodemailer) would go here.
    res.status(200).json({ message: 'Inquiry received.' });
});

module.exports = router;
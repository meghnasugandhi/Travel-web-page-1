/**
 * Contact Form Routes
 * Defines the public endpoint for handling contact form submissions at POST /api/contact.
 */
const express = require('express');
const router = express.Router();
// Reference the controller from the controllers directory
const { submitContactForm } = require('../controllers/contactController'); 

// POST request to handle form submission (POST /api/contact)
router.post('/', submitContactForm);

module.exports = router;

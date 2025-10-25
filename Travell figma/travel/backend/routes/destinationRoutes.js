// /backend/routes/destinationRoutes.js
const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// Handles GET /api/destinations (list all destinations)
router.get('/', destinationController.getDestinations);

// Handles GET /api/destinations/:id (get single destination detail)
router.get('/:id', destinationController.getDestinationById);

module.exports = router;

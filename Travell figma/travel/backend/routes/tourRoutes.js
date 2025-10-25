// /backend/routes/tourRoutes.js
const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

// Handles GET /api/tours (list all tours)
router.get('/', tourController.getTours);

// Handles GET /api/tours/:id (get single tour detail)
router.get('/:id', tourController.getTourById);

module.exports = router;
const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

// Handles GET /api/hotels (list, filter, and sort hotels)
router.get('/', hotelController.getHotels);

// Handles GET /api/hotels/:id (get single hotel detail)
router.get('/:id', hotelController.getHotelById);

module.exports = router;
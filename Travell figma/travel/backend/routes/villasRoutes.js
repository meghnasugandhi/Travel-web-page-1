// /backend/routes/villasRoutes.js
const express = require('express');
const router = express.Router();
const villasController = require('../controllers/villasController');

// Handles GET /api/villas (list all posts and sidebar data)
router.get('/', villasController.getVillasData);

// Handles GET /api/villas/:id (get single post detail)
router.get('/:id', villasController.getVillaPostById);

module.exports = router;

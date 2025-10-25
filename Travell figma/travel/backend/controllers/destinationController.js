// /backend/controllers/destinationController.js
const DUMMY_DESTINATIONS_DB = require('../dummyDestinationData');

/**
 * @route GET /api/destinations
 * @desc Get all available destinations and their tour counts
 */
exports.getDestinations = (req, res) => {
    // Simply return the mock database array
    res.status(200).json(DUMMY_DESTINATIONS_DB);
};

/**
 * @route GET /api/destinations/:id
 * @desc Get a single destination by ID (optional for future detail page)
 */
exports.getDestinationById = (req, res) => {
    const destId = parseInt(req.params.id);
    const destination = DUMMY_DESTINATIONS_DB.find(d => d.id === destId);

    if (destination) {
        res.status(200).json(destination);
    } else {
        res.status(404).json({ message: 'Destination not found' });
    }
};

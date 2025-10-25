// /backend/controllers/tourController.js
const DUMMY_TOURS_DB = require('../dummyTourData');

// Simple function to get all tours (no filtering needed yet)
exports.getTours = (req, res) => {
    // In the future, you could add filtering logic based on req.query here
    // e.g., if (req.query.location) { ... filter by location ... }
    
    // For now, just return all tours
    res.status(200).json(DUMMY_TOURS_DB);
};

// Function to get a single tour by ID
exports.getTourById = (req, res) => {
    const tourId = parseInt(req.params.id);
    const tour = DUMMY_TOURS_DB.find(t => t.id === tourId);

    if (tour) {
        res.status(200).json(tour);
    } else {
        res.status(404).json({ message: 'Tour package not found' });
    }
};
// /backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Import existing routes
const hotelRoutes = require('./routes/hotelRoutes');
const miscRoutes = require('./routes/miscRoutes'); 
const tourRoutes = require('./routes/tourRoutes'); 
const destinationRoutes = require('./routes/destinationRoutes'); 

// NEW: Import Contact Routes
const contactRoutes = require('./routes/contactRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000; 

// 1. MIDDLEWARE
app.use(cors());
app.use(express.json());

// 2. ROUTER MIDDLEWARE
// Hotels endpoint: http://localhost:5000/api/hotels
app.use('/api/hotels', hotelRoutes); 

// Tours endpoint: http://localhost:5000/api/tours
app.use('/api/tours', tourRoutes); 

// Destinations endpoint: http://localhost:5000/api/destinations
app.use('/api/destinations', destinationRoutes); 

// Miscellaneous (Newsletter) endpoint: http://localhost:5000/api/subscribe
app.use('/api', miscRoutes); 

// NEW: Contact Form endpoint: http://localhost:5000/api/contact
app.use('/api/contact', contactRoutes); 

// Default root route (optional, but prevents "Cannot GET /")
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Welcome to the main API!',
        endpoints: ['/api/hotels', '/api/tours', '/api/destinations', '/api/subscribe', '/api/contact']
    });
});

// 3. START SERVER
app.listen(PORT, () => {
    console.log(`✅ API running on http://localhost:${PORT}`);
});
